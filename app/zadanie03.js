//Twój kod

var result = 0
for (let i = 2; i < process.argv.length; i++) {
	result += parseInt(process.argv[i], 10);
};

console.log(result);