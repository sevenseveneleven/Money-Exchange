
module.exports = function makeExchange(currency) {
   let onHands = currency;
   
   let coins = {};
   
	if (onHands>0 && onHands<10001) {
     
     if (onHands>=50) { 
       coins["H"] = ~~(onHands/50);
       onHands %= 50;    
     }
     
     if (onHands>=25) { 
       coins["Q"] = ~~(onHands/25);
       onHands %= 25;    
     }
     
     if (onHands>=10) { 
	 coins["D"] = ~~(onHands/10);
       onHands %= 10;    
     }
     
     if (onHands>=5) { 
       coins["N"] = ~~(onHands/5);
       onHands %= 5;    
     }
     if (onHands>=1) { 
       coins["P"] = onHands;   
     }       
     
	}
   

	if (onHands>10000) {
           coins = {error: "You are rich, my friend! We don't have so much coins for exchange"};
            }
return coins;
}
