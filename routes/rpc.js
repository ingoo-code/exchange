const express = require('express')
const router = express.Router()
const request = require('request')

const USER = process.env.RPC_USER || 'ingoo'
const PASS = process.env.PRC_PASSWORD || '1234'

const PORT = 3000
const ACCOUNT = 'ingoo'
const ID_STRING = `ingcoin`
const headers = {
    "content-type":"application/json"
}

router.get(`/test`,(req,res)=>{
    res.json({msg:"api server test"})
})

// 블록체인 갯수 구하기
router.get(`/getblockcount`,(req,res)=>{
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getblockcount","params":[]}`
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    }

    let callback = (err,response,body) => {
        if (err==null && response.statusCode == 200) {
            const data = JSON.parse(body)
            res.json(data)
        }
    }

    request(options,callback)
})

// 매개변수 <계정>  지정된 계정의 주소 목록을 반환합니다.
router.get(`/getaddressesbyaccount`,(req,res)=>{
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getaddressesbyaccount","params":["${ACCOUNT}"]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    }

    let callback = (err,response,body) => {
        if (err==null && response.statusCode == 200) {
            const data = JSON.parse(body)
            res.json(data)
        }
    }

    request(options,callback)
})

// 가장 긴 블록 체인에서 최신 블록의 해시를 반환합니다.
router.get("/getbestblockhash", (req, res) => {
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getbestblockhash","params":[]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    };

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        }
    };
    request(options, callback);
});

//다른 노드에 대한 연결 수를 반환합니다.
router.get("/getconnectioncount", (req, res) => {
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getconnectioncount","params":[]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    };

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        }
    };
    request(options, callback);
});

//
router.get("/getconnectioncount", (req, res) => {
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getconnectioncount","params":[]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    };

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        }
    };
    request(options, callback);
});

router.get("/getaddressesbyaccount/:account",(req,res)=>{
    const {account} = req.params;
    let body = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getaddressesbyaccount","params":["${account}"]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers,
        body
    };

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        }
    };
    request(options, callback);
})

module.exports = router