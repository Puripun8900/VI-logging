// Simple in-memory counter
let count = 0;


function read() {
return count;
}


function increase() {
count += 1;
return count;
}


function zero() {
count = 0;
return count;
}


function set(value) {
count = Number(value) || 0;
}


module.exports = { read, increase, zero, set };