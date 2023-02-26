var state = 1;

setInterval(function(){
    
    if(state===1){
        setTimeout(function(){
            state=2;
            document.querySelector("#main2 #txt h1").innerHTML="Indulegent Sweet That Create <br> Lasting Impression";
            document.querySelector("#main2 #txt h3").innerHTML="DISCOVER BY CHHAT SWEETS";
            document.querySelector("#imgs").setAttribute("src", "halwa.jpg");
            
        },2000)
        console.log(state)
       
    }
    else if(state===2){
        setTimeout(function(){
            state=0;
            document.querySelector("#main2 #txt h1").innerHTML="Winter Indulegence";
            document.querySelector("#main2 #txt h3").innerHTML="CRAFTED TO WARM YOUR HEART";
            document.querySelector("#imgs").setAttribute("src", "gajak.jpg")
            
        },2000)
        console.log(state)
        
    }
    else{
        setTimeout(function(){
            state=1;
            document.querySelector("#main2 #txt h1").innerHTML="The Art of Flavours, <br> Mastered & Remastered";
            document.querySelector("#main2 #txt h3").innerHTML="ONLY AT CHHAT SWEETS";
            document.querySelector("#imgs").setAttribute("src", "laddu.jpg")
            
        },2000)
        console.log(state)
        
    }
})