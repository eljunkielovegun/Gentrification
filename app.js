var express = require('express');
var bodyParser = require('body-parser');
var lineReader = require('line-reader');
var app = express();
var path = require('path');
var fs = require('fs');
var getInput;
var i=0;
var dataFromFile;
var gentrifiedArray =[];

var port = process.env.PORT || 3000;

app.use(bodyParser.text({ type:'*/*'}));

grabFile();

app.use('/public', express.static(__dirname + '/public'));

// readFile(function (err, data){
// 	console.log(dataFromFile);

// });

//--- fs.appendFile ---- this for making new file with entries

app.get('/gentrified', function(req, res) {
	res.sendFile(path.join(__dirname + '/indexGentrified.htm'));
	res.send(gentrifiedArray);

});

app.get('/gentrifier', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/indexGentrifier.htm'));

	// next() {fs.readFile('my-text.txt', 'utf8', function(err, data) {  
	// 	if (err) throw err;
	// 	// if (err) return dataFromFile, (err);
	// 	// dataFromFile(null, data);
	// 	console.log(data);
	// });
	// };


});


//-------- read the contents of the file and put them in an array




//console.log('check me');
//console.log(dataFromFile);



post(i);


app.listen(port);


// function readFile(dataFromFile){

// 	fs.readFile('my-text.txt', 'utf8', function(err, data) {  
// 		if (err) throw err;
// 		// if (err) return dataFromFile, (err);
// 		// dataFromFile(null, data);
// 		console.log(data);
// 	});
	
// }


function post(i){

	app.post('/Gentrifier', function(request, response){
		console.log('check me 2x');
		i=Math.random()*10000;
		i = Math.trunc(i);
		console.log(i);
		getInput = request.body; 
		console.log(getInput); 
		writeFile(getInput,i);
		//response.send(request.body);
		response.send('thanks');   
		
	  });
	  
return i;
	 
}

function writeFile(getInput, i){ 
	
	i =i;
	
fs.writeFile(__dirname + "/words-"+i, getInput, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
};

function grabFile(){ 
	lineReader.eachLine('testDivArray.txt', {encoding: 'utf8'}, function(line, last) {
		//line = line.replace(/\\/g,"" );
		//line = line.toString(); // getting a backslash added when pushedd to the array
		//console.log(line);
		gentrifiedArray.push(line);
	
		if (last) {
		  //console.log(gentrifiedArray);
		  //console.log(gentrifiedArray.length);
		  return false; // stop reading
		}
	  });
	};
