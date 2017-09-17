import * as express from 'express'

const app = express();

app.get('/',(request, response) => response.send('这里是首页'));
app.get('/stock',(request, response) => response.send('接收到股票查询请求'));


const  server = app.listen(8080,'localhost', () => {
    console.log('服务器已经启动，地址是http://localhost:8080');
})