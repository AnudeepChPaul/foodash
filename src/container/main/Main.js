/*
    Main class implementation
    by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './Main.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import FilteredThumbnailList from '../../components/list/thumbnail/filtered/FilteredThumbnailList';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/list-actions';

class Main extends Component {
    render = () => {
        return (
            <div className='App-Main'>
                <Header
                    title={this.props.title}
                    subHeader={this.props.subHeader}
                />
                <div className='App-Main-Wrapper'>
                    <Sidebar listData={this.props.sidebarListData}/>
                    <FilteredThumbnailList
                        listData={this.props.thumbnailListData}
                    />
                </div>
                {/* <Footer /> */}
            </div>
        );
    };

    componentDidMount = () => {
        debugger
        this.props.fetchSidebarList();
        this.props.fetchThumbnailList();
    };
}

const mapStateToProps = state => ({
    thumbnailListData: state.listState.thumbnailListData,
    sidebarListData: state.listState.sidebarListData
});
const mapDispatchToProps = dispatch => ({
    fetchThumbnailList: () => dispatch(actionCreators.fetchThumbnailList()),
    fetchSidebarList: () => dispatch(actionCreators.fetchSidebarList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
