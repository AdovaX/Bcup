var express = require('express');
var http = require('http');
const date = require('date-and-time');
var app = express();
const { zip } = require('zip-a-folder');
 const now = new Date();

var server = app.listen(1219, () => {
 console.log('server is running on port :', server.address().port);
});

class Backup {
    static async main() { 

      var file_name =  date.format(now, 'YYYY-MM-DD-HH:mm:ss').toString(); 
      file_name = "./"+file_name+".zip";
      await zip('public/', file_name);
    }
}

app.get('/backup',function(req,res){

Backup.main(); 
res.send('Completed the process');

});


 

