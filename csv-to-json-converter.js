const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './customer-data.csv'), function(error, data){
	if(error){
		console.log(error.message);
	}else{
		let toObject= {};
		let counter = 0;
		let arrayOfObjects = [];
		let splitedData = data.toString().split('\r\n');
		let headerArray = splitedData[0].split(',');
		
		for(let index=1; index<splitedData.length; index++){
			
			let dataFromArray = splitedData[index].split(',');
			
			for(let index=0; index<dataFromArray.length; index++){
				
				toObject[headerArray[index]] = dataFromArray[index];
				counter++;
				
				if(index === dataFromArray.length - 1 && Object.keys(toObject).length === headerArray.length){
					arrayOfObjects.push(toObject);
					counter = 0;
					toObject = {};
				}
			}
		}
		fs.writeFile(path.join(__dirname, './customer-data.json'), JSON.stringify(arrayOfObjects), function(error){
			if(error){
				console.log(error.message);
			}
			console.log('Data converted from CSV to JSON successfully!');
		})
	}
});