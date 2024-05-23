const client = require('./client.js');

async function init(){
    // await client.lpush('messages', 1);
    // await client.lpush('messages', 2);
    // await client.lpush('messages', 3);
    // await client.lpush('messages', 4);

    // const result = await client.rpop('messages');

    // await client.expire('messages',1);
    
    const result = await client.lrange('messages', 0 ,-1);

    console.log(result);
}

init();
