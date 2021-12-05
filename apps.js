var initialPrice = document.querySelector("#put-old-price");
var stockQuantity = document.querySelector("#put-stock-quantity");
var currentPrice = document.querySelector("#put-current-price");
var clickButton = document.querySelector("#tell-me");
var outputBox = document.querySelector("#output-box");

function calculateProfitLoss(initial,qty,current){
    if (initial>current){
        var loss = (initial - current) * qty;
        var lossPercantage = (loss/initial)*100;
        outputBox.innerText=(`hey, the loss is ${loss} and the percent is ${lossPercantage}%`)
    } else if(current>initial){
        var profit = (current - initial) * qty;
        var profitPercantage = (profit/initial)*100;
        outputBox.innerText=(`hey, the profit is ${profit} and the percent is ${profitPercantage}%`)
    } else{
        outputBox.innerText=("No pain no gain and no gain no pain")
    }
}

function submitHandler(){
    var initial = initialPrice.value;
    var qty = stockQuantity.value;
    var current = currentPrice.value
    calculateProfitLoss(initial,qty,current);
}

clickButton.addEventListener("click",submitHandler);