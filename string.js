const client = require ('./client.js')

async function init(){
    // await client.set('name', 'james');
    // await client.expire('name', 10);
    const name = await client.get('name');
    console.log(name);
}

init();