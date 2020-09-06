var express = require('express');
var http = require('http');
const fs = require('fs');
const date = require('date-and-time');
var app = express();
const { zip } = require('zip-a-folder');
const now = new Date();
var file_name = "null";


var server = app.listen(3234, () => {
 console.log('server is running on port :', server.address().port);
});

class Backup {
    static async main() { 

       file_name =  date.format(now, 'YYYY-MM-DD-HH:mm:ss').toString(); 
       file_name = "./"+file_name+".zip";
        await zip('./', file_name);


    }
}
 
app.get('/backup',function(req,res){

Backup.main(); 
 var zip = require('express-zip');

var paths = file_name;
	var timeouts = 20;
      timeouts = setInterval(function() {

        const file = paths;
        const fileExists = fs.existsSync(file);

        console.log('Checking for the  backup : ', file);

		if (fileExists) {     
		console.log('Backup file is beeing ready for download...');

		setTimeout(function() {
		console.log('File is ready to download....');
		var download_file_name = date.format(now, 'YYYY-MM-DD-HH').toString()+".zip";
		res.zip([
		{ path: paths, name: download_file_name } 
		]);
		}, 30000); 
		console.log('Preparing to download...');
		clearInterval(timeouts);
        }
    }, timeouts);

});
