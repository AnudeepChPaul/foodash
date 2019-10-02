import axios from 'axios';
import faker from 'faker';

const unsplash = params =>
    axios.get('https://api.unsplash.com/search/photos?page=1&query=office', {
        params: params,
        headers: {
            Authorization:
                'Client-ID 92f85e02952ce78acccd0d7600c3b125a76cc6bf73e941fb6b5c418ce96e5280'
        }
    });

const getFoodImages = () =>
    unsplash({
        query: 'food',
        orientation: 'landscape'
    }).then(response => {
        const res = [];
        response.data.results.forEach(image => {
            res.push({
                name: faker.name.firstName(),
                url: image.urls.thumb,
                description: faker.lorem.lines(1)
            });
        });
        return res;
    });

const getAvatarImages = () =>
    unsplash({
        query: 'avatar'
    }).then(response => {
        const res = [];
        response.data.results.forEach(image => {
            res.push({
                name: faker.name.firstName(),
                url: image.urls.thumb,
                description: faker.lorem.word(9)
            });
        });
        return res;
    });

export {getFoodImages, getAvatarImages};
