var net = require ('net');
var chatServer = net.createServer();
var info=[];
chatServer.on("connection",function (client) {
    info.push(client)
    // client.write('hahah\n\r');
    // client.write('我是一个小仙女\n')
    // client.end();
    client.on("data",function (data) {
        for(var i=0;i<info.length;i++){
            info[i].write(data)
        }
        console.log(data.toString())
    })
})

chatServer.listen(9000)