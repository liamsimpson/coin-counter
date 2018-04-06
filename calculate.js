var fiveC = parseFloat(0).toFixed(2);
var tenC = parseFloat(0).toFixed(2);
var twentyC = parseFloat(0).toFixed(2);
var fiftyC = parseFloat(0).toFixed(2);
var oneD = parseFloat(0).toFixed(2);
var twoD = parseFloat(0).toFixed(2);
var fiveD = parseFloat(0).toFixed(2);
var tenD = parseFloat(0).toFixed(2);
var twentyD = parseFloat(0).toFixed(2);
var fiftyD = parseFloat(0).toFixed(2);
var hundredD = parseFloat(0).toFixed(2);

function getfiveCents() {
    var input = parseFloat(document.getElementById('5cents').value).toFixed(2);
    var fiveCents = input;
    var input = parseFloat(document.getElementById('value5c').innerHTML).toFixed(2);
    var valueFiveCents = input;
    
    valueTemp = valueFiveCents * fiveCents;
    fiveC = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('5c').innerHTML = fiveC;     
};

function gettenCents() {
    var input = parseFloat(document.getElementById('10cents').value).toFixed(2);
    var tenCents = input;
    var input = parseFloat(document.getElementById('value10c').innerHTML).toFixed(2);
    var valueTenCents = input;
    
    valueTemp = valueTenCents * tenCents;
    tenC = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('10c').innerHTML = tenC; 
};

function gettwentyCents() {
    var input = parseFloat(document.getElementById('20cents').value).toFixed(2);
    var twentyCents = input;
    var input = parseFloat(document.getElementById('value20c').innerHTML).toFixed(2);
    var valueTwentyCents = input;
    
    valueTemp = valueTwentyCents * twentyCents;
    twentyC = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('20c').innerHTML = twentyC; 
};

function getfiftyCents() {
    var input = parseFloat(document.getElementById('50cents').value).toFixed(2);
    var fiftyCents = input;
    var input = parseFloat(document.getElementById('value50c').innerHTML).toFixed(2);
    var valueFiftyCents = input;
    
    valueTemp = valueFiftyCents * fiftyCents;
    fiftyC = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('50c').innerHTML = fiftyC; 
};

function getoneDollar() {
    var input = parseFloat(document.getElementById('1dollar').value).toFixed(2);
    var oneDollar = input;
    var input = parseFloat(document.getElementById('value1d').innerHTML).toFixed(2);
    var valueOneDollar = input;
    
    valueTemp = valueOneDollar * oneDollar;
    oneD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('1d').innerHTML = oneD; 
};

function gettwoDollar() {
    var input = parseFloat(document.getElementById('2dollar').value).toFixed(2);
    var twoDollar = input;
    var input = parseFloat(document.getElementById('value2d').innerHTML).toFixed(2);
    var valueTwoDollar = input;
    
    valueTemp = valueTwoDollar * twoDollar;
    twoD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('2d').innerHTML = twoD; 
};

function getfiveDollar() {
    var input = parseFloat(document.getElementById('5dollar').value).toFixed(2);
    var fiveDollar = input;
    var input = parseFloat(document.getElementById('value5d').innerHTML).toFixed(2);
    var valueFiveDollar = input;
    
    valueTemp = valueFiveDollar * fiveDollar;
    fiveD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('5d').innerHTML = fiveD; 
};

function gettenDollar() {
    var input = parseFloat(document.getElementById('10dollar').value).toFixed(2);
    var tenDollar = input;
    var input = parseFloat(document.getElementById('value10d').innerHTML).toFixed(2);
    var valueTenDollar = input;
    
    valueTemp = valueTenDollar * tenDollar;
    tenD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('10d').innerHTML = tenD; 
};

function gettwentyDollar() {
    var input = parseFloat(document.getElementById('20dollar').value).toFixed(2);
    var twentyDollar = input;
    var input = parseFloat(document.getElementById('value20d').innerHTML).toFixed(2);
    var valueTwentyDollar = input;
    
    valueTemp = valueTwentyDollar * twentyDollar;
    twentyD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('20d').innerHTML = twentyD; 
};

function getfiftyDollar() {
    var input = parseFloat(document.getElementById('50dollar').value).toFixed(2);
    var fiftyDollar = input;
    var input = parseFloat(document.getElementById('value50d').innerHTML).toFixed(2);
    var valueFiftyDollar = input;
    
    valueTemp = valueFiftyDollar * fiftyDollar;
    fiftyD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('50d').innerHTML = fiftyD; 
};

function gethundredDollar() {
    var input = parseFloat(document.getElementById('100dollar').value).toFixed(2);
    var hundredDollar = input;
    var input = parseFloat(document.getElementById('value100d').innerHTML).toFixed(2);
    var valueHundredDollar = input;
    
    valueTemp = valueHundredDollar * hundredDollar;
    hundredD = parseFloat(valueTemp).toFixed(2);
    console.log(valueTemp);
    document.getElementById('100d').innerHTML = hundredD; 
};

function addBalance() {
    tally = parseFloat(fiveC) + parseFloat(tenC) + parseFloat(twentyC) + parseFloat(fiftyC) + parseFloat(oneD) + parseFloat(twoD) + parseFloat(fiveD) + parseFloat(tenD) + parseFloat(twentyD) + parseFloat(fiftyD) + parseFloat(hundredD);
    console.log(tally);
    document.getElementById('addBalance').innerHTML = 'Your Calculated Balance = $'+ parseFloat(tally).toFixed(2);
    
    
    
}