var http = require('http');     //引入HTTP包
var url = require('url');
var USERS = [{
    username: 'root',
    password: '123456'
}]
http.createServer(function (request, response){
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    //输出请求文件名
    console.log("请求信息 " + pathname + "收到");
    console.log("请求类型: "+request.method.toUpperCase());
    
    if (pathname == '/login') {
        if (request.method.toUpperCase() !='GET'){
            var postdate='';
            request.addListener('data',function(data){
                postdate +=data
            });
        
        request.addListener('end',function () {
            console.log(postdate);
            var user = JSON.parse(postdate);

            response.writeHead(200, {
            'Content-Type': 'application/json',     //返回类型
            'Access-Control-Allow-Origin': '*'      //允许跨域访问
        });
 
        if (user.username ===USERS[0].username&&
            user.password ===USERS[0].password){
                response.write('{"success":true,"errorCode":0}');
            }
            else{
                response.write('{"success":false,"errorCode":100}');
            }
            response.end();
        });
    }
    else{
       response.writeHead(200,{
        'Content-Type':'application/json',
        'Access-Control-Allow-Qrigin':'*'
       });
       response.write(JSON.stringify(USERS));
       response.end();
    }
    }
    else{
        response.write("Hello,it's my web server!");
        response.end();
    }

}).listen(8082);

console.log("启动Web服务器，监听8082端口!");