// counter elements
const subhanAllahCount = document.getElementById('subhanAllahCount');
const alhamdulilahCount = document.getElementById('alhamdulilahCount');
const allahuakberCount = document.getElementById('allahuakberCount');

// increament elements
const subhanAllahIncriment = document.getElementById('subhanAllahIncriment');
const alhamdulilahIncriment = document.getElementById('alhamdulilahIncriment');
const allahuakberIncriment = document.getElementById('allahuakberIncriment');

// decreament elements
const subhanAllahDecriment = document.getElementById('subhanAllahDecriment');
const alhamdulilahDecriment = document.getElementById('alhamdulilahDecriment');
const allahuakberDecriment = document.getElementById('allahuakberDecriment');

// reset all button
const btnReset = document.getElementById('btn-reset');

let i = 0, j = 0, k = 0;

// function 1
subhanAllahIncriment.addEventListener('click', function() {
    if(i === 33) {
        return alert('Finished Subhan Allah.');
    }
    i += 1;
    subhanAllahCount.innerText = i;
});

subhanAllahDecriment.addEventListener('click', function() {
    if(i === 0) {
        return alert('No value in Subhan Allah.');
    }
    i -= 1;
    subhanAllahCount.innerText = i;
});

// function 2
alhamdulilahIncriment.addEventListener('click', function() {
    if(j === 33) {
        return alert('Finished Alhamdulillah.');
    }
    j += 1;
    alhamdulilahCount.innerText = j;
});

alhamdulilahDecriment.addEventListener('click', function() {
    if(j === 0) {
        return alert('No value in Alhamdulilah.');
    }
    j -= 1;
    alhamdulilahCount.innerText = j;
});

// function 3
allahuakberIncriment.addEventListener('click', function() {
    if(k === 33) {
        return alert('Finished Allahuakber.');
    }
    k += 1;
    allahuakberCount.innerText = k;
});

allahuakberDecriment.addEventListener('click', function() {
    if(k === 0) {
        return alert('No value in Allahuakber.');
    }
    k -= 1;
    allahuakberCount.innerText = k;
});

// reset btn function
btnReset.addEventListener('click', function() {
    subhanAllahCount.innerText = 0;
    alhamdulilahCount.innerText = 0;
    allahuakberCount.innerText = 0;
    i = 0, j = 0, k = 0;
});