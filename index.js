var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var polk = document.getElementById("polkadot");
var car = document.getElementById("cardano");
var sol = document.getElementById("solana");

let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano%2Csolana%2Cpolkadot&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(response){
   btc.innerHTML = response.bitcoin.usd;
   eth.innerHTML = response.ethereum.usd;
   doge.innerHTML = response.dogecoin.usd;
   polk.innerHTML = response.polkadot.usd;
   car.innerHTML = response.cardano.usd;
   sol.innerHTML = response.solana.usd;

})