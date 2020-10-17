const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    // alert("Hello");

    // Player 1
    const play1 = Math.floor(Math.random()*6)+1;
    // console.log(play1);
    const play1dice = `images/dice${play1}.png`;
    const playalt = `dice${play1}`;
    // console.log(play1dice);
    document.getElementById('check1').setAttribute('src', play1dice);
    document.getElementById('check1').setAttribute('alt', playalt);

    // Player 2
    const play2 = Math.floor(Math.random()*6)+1;
    const play2dice = `images/dice${play2}.png`;
    const play2alt = `dice${play2}`;
    document.getElementById('check2').setAttribute('src', play2dice);
    document.getElementById('check2').setAttribute('alt', play2alt);

    //Who is Winner?
    if(play1 > play2){
        // let pcolor = #ff0000;
        // document.querySelector('h2').setAttribute('color', pcolor);
        document.querySelector('h2').innerHTML = "Player 1 Won!!";
        
    }else if(play1 < play2){
        document.querySelector('h2').innerHTML = "Player 2 Won!!";
    }else{
        document.querySelector('h2').innerHTML = "DRAW!!";
    }

});