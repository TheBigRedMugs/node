var request = require('request');
var fs = require('fs');
var unzip = require('unzip')
var rimraf = require('rimraf');

var uri = 'http://softwaredownloads.corsair.com/Files/Gaming-Keyboards/Corsair-SDK-Release-v2.18.127.zip';

function main () {
	fs.mkdirSync(__dirname+'/tmp/')

	console.log('Downloading and Extracting CUESDK');
	
	var s = request(uri).pipe(unzip.Extract({ path: __dirname+'/tmp/' }));
	s.on('close', function (response) {
		console.log('Cleaning up CUESDK');
		fs.renameSync(__dirname+'/tmp/CUESDK/redist/', __dirname+'/bin/')
		fs.renameSync(__dirname+'/bin/x64/CUESDK.x64_2015.dll', __dirname+'/bin/x64/CUESDK_2015.dll')
		rimraf(__dirname+'/tmp/',  function(){});
	});
	s.on('error', function(e) {
		console.log(e);
		throw new Error('Error while downloading CUESDK')
	})
}

rimraf(__dirname+'/tmp/', function() {
	rimraf(__dirname+'/bin/', main)
});