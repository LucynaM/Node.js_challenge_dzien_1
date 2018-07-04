//Twój kod


const processData = process.argv.slice(2).sort();

for (let i = 0; i < processData.length; i++) {
	setTimeout(() => {
		console.log(parseInt(processData[i],10));
	}, parseInt(processData[i],10)*1000);
};