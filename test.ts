const obj = { abcd: 1, bcde: 2 };

for (const key in obj) {
	console.log(key);
	console.log(JSON.stringify(key));
	console.log(key.startsWith("a"));
}
