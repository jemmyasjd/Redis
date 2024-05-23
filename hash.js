const client = require('./client.js');

async function init(){

    // await client.hset('user:1000', 'name', 'John Doe', 'email', 'hello@gmail.com', 'phone', '1234567890');
    
    const result = await client.hget('user:1000', 'name');
    const result2 = await client.hgetall('user:1000');

    await client.hincrby('user:1000', 'phone', 5);
    // console.log(result);
    console.log(result2);

}

init();
