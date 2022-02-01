const express = require('express');
const {response, request} = require("express");

const app = express();

app.get('/', (request, response)=>{
    response.send('Hello, express')

})
//all 接受所有请求
app.all('/serve', (require, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello post');
})
//json
app.all('/json-server', (require, response)=>{
    //响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'atguigu'
    };

    let str = JSON.stringify(data);
    response.send(str);
})

//针对ie缓存
app.get('/ie', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ie');
})

app.listen(8000,()=>{
    console.log("serve running")
})