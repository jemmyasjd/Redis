
# Redis <img src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" width="36" height="36">

# INTRODUCTION 

**Why Redis is needed ??** 

-> It is basically used to cache the **computed data** so that it reduces the load on the server due to excessive query and also reduces the response time since it directly return the data to the user if already cached or present thus making the app more effective and optimize.Thus solving two problems : 1) Requering 2) Response Time 

**What is Redis??** 

-> Redis is an open source in-memory data store that can be used as a database, cache, or message broker. It's often used for caching web pages and reducing the load on servers.

**On which port number does the redis run:** 6379

**What is Redis Stack ??** : 

-> Redis Stack consolidates the capabilities of the leading Redis modules into a single product.

**Data Types:** There are various data types offered by the redis. They are : String, JSON, list, Set , Hash etc

## Commands for the Redis


**To start a Redis Stack container :** 

docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

-d : detached mode that means it will run in background 

-p : for the port mapping

--name : to give the name to the container

**To start or execute the redis stack:**

docker exec -it contaianer_id bash



**Other Commands:**

-> **redis-cli** : to get into the server 

-> **ping** : to ping the server 

-> **set key value** : For eg. set name redis : To set the data 

-> **get key:** for eg. get name => "redis" : To get the data

-> **set key value nx** : Here nx is a special command that will cached the data only if not already cached before.

-> **mget key1 key2 key3** : To simultaneously get more than 1 cached data

-> **mset key1 "value1" key2 "value2":** To set multiple cached data simultaneously

-> **incr key** : to increment the value by 1

-> **incrby key n** : to increment value by n

-> **expire key nsec** : will delete the key value after n sec

-> **lpush key value:** push the element into the list from left side

-> **rpush key value:** push element into the list from right side

-> **llen key value:** return the length of the list 

-> **lpop key value:** removes and return the head of the list

-> **lrange key start stop:** return the element in range 

-> **delete key:** to delete the list

-> **KEYS key:type** to get the data of the specific key group 

-> **sadd key value:** to add value to the set

->**srem key value:** to remove from the set

-> **sismember key value:** to check that value present in set or not

-> **sinter key1 key2:** to get the common element between two set

-> **hset key field value field value:** to add the data to the hash set

-> **hget key field :** to get the value of particular field

->**hget all key:** to get all the value of key 

-> **hmget key field1 field2:** : to get the value of multiple field of key 

-> **hincrby key value n** : to increment field value by n 

->**zadd key n value**: sort with according to the lowest value of n

-> **zrange key start stop:** to get all the value 

-> **zrevrange key start stop:** to get all the value in reverse order

-> **zrank key value:** to get the rank of the given value

**Some important things to remember:**

-> the naming of the key should folow some rules such as 

<entity>:<id> value : For eg. get user:1 redis. This is helpful for the grouping purpose

-> You can also perform SUBSTR GETRANGE STERANGE Commands on string datatype. And one redis string can store upto max of 512mb

-> List can be implmented as a Stack as well as Queue. If u insert the element from left and remove from right then it will act as Queue and if u remove from the same side of insertion then it will act as Stack.

-> Redis stream data structure is used to handle the fastly generating or dumping data just like kafka

-> Geospatial in redis special datatype that is used to store the geolocation such as longitude and latitude 
## PubSub in Redis

-> Redis has also been used as a global like server where one can publish the information and the subcribed user will synchronously get that information.
