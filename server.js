const express = require('express');
const axios = require('axios');
const client = require('./client.js');



const app = express();

app.get('/', async (req, res) => {

    const cachedData = await client.get('todos');

    if(cachedData){
        console.log('Data from cache');
        return res.json(JSON.parse(cachedData));
    }

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});