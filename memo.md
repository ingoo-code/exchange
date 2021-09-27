# curl

-H : header
-d : data
-X : Request method 



curl [option] [도메인]

curl -X POST -H "" -d "data~" http://naver.com

[도메인] = RPCUSER:RCPPASSWORD@IPADDRESS:RPCPORT

RPCUSER = ingoo
RPCPASSWORd = 1234
IPADDRESSS = 127.0.0.1
RPCPORT = 3000

[도메인] = ingoo:1234@127.0.0.1:3000

curl 
-X POST 
-H "Content-type: application/json" 
-d '{"method":"getnewaddress","params":["ingoo5"]}' ingoo:1234@127.0.0.1:3000

{"method":"getnewaddress","params":["ingoo5"]}

curl -X POST -H "Content-type: application/json" -d '{"method":"getnewaddress","params":["ingoo5"]}' ingoo:1234@127.0.0.1:3000

{"result":"iGxCmfb9r9LAAtjHZbKkBBpHt1fjzfHjSV","error":null,"id":null}


# NodeJS 환경구축

1. Server.js 만들기
2. npm init 해서 nodejs 환경 만들기
3. npm install express
4. npm install request