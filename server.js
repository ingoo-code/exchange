// url 127.0.0.1:3800 -> hello ingcoin! 
const express = require('express')
const request = require('request')
const cheerio = require('cheerio') // npm install cheerio

const app = express()

//요청 -> 응답
app.get('/',(req,res)=>{
    res.send(`hello ingcoin !`)
})

// A       B      B       A
//요청 -> 요청 -> 응답 -> 응답
// naver
app.get('/naver',(req,res)=>{

    //요청 request
    // request 2개의 인자값 
    // 1: url값(string) or object{ url 존재합니다.}
    // 2: 콜백에 대한 값
    request(`https://naver.com`,(err,response,body)=>{
        console.log(err) // null
        if (err == null) {
            res.send('naver')
        } else {
            res.send('error')
        }
    })
})

app.get('/naver2',(req,res)=>{
    // url 
    // callback
    request(
        {
            url:"http://naver.com",
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:"{msg:'hello world!'}"
        },
        (err,response,data)=>{
            console.log(data)
            console.log(response.statusCode)
            // 성공이라는 조건이라면 상태코드가 200이고 err == null
            if (err == null && response.statusCode == 200) {
                res.send("naver2")
            } else {
                res.send('error')
            }
        }
    )
})

app.get('/crawling',(req,res)=>{
    request(`http://naver.com`,(err,response,data)=>{
        let $ = cheerio.load(data) // 선택자 
        $('.partner_box_wrap > .partner_box:nth-child(3) > a').each((index,item)=>{
            let {data} = item.children[0]
            console.log(data)
        })
    })
})

/*
curl 
-X POST 
-H "Content-type: application/json" 
-d '{"method":"getnewaddress","params":["ingoo5"]}' 
ingoo:1234@127.0.0.1:3000
*/
const headers = { "Content-type":"application/json" }

const USER = process.env.RPC_USER || 'ingoo'
const PASS = process.env.RPC_PASSWORD || '1234'
const RPCPORT = process.env.RPC_PORT || 3000

app.get('/newaddress/:account',(req,res)=>{
    const {account} = req.params
    const body = `{"method":"getnewaddress","params":["${account}"]}`
    const options = {
        url:`http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`,
        method:"POST",
        headers,
        body
    }

    const callback = (err,response,data) => {
        if (err == null && response.statusCode == 200) {
            const body = JSON.parse(data)
            //res.send(body)
            res.render() // html 페이지를 보여줄수있다.
        } else {
            res.send("error")
        }
    }

    request(options,callback)
})

app.listen(3800,()=>{
    console.log(`server start port 3800`)
})