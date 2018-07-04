//Twój kod

console.log('Witam');
const text = ['się', 'z', 'programem', 'Node.js', 'w konsoli', 'i korzystam', 'z funkcji czasu'];

for (let i = 0; i < text.length; i++) {
	setTimeout(() => {
		console.log(text[i]);
	}, 1000);
}