import * as http from 'http'
import {request} from "http";
import {port} from "_debugger";
import {hostname} from "os";
const server = http.createServer((request, response) => {
    response.end("Hello Node !");
});

server.listen(8000);