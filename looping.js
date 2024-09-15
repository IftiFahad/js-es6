const numbers = [1, 5, 10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log(num);
}

const nam = 'Iftikharul Fahad'
for (const char of nam)
{
    console.log(char);
}

const glass = { name: 'glass', color: 'white', price: 100, isCleanded: true };
for (const key in glass) {
    const value = glass [key];
    console.log(key,value);
}