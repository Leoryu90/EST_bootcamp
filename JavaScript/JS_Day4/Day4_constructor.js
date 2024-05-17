const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}