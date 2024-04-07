let joined=()=>{
    let title=document.getElementById('title');
    title.innerText='Congratulation you Joinned🎉🎉🎉🎊🎊㊗️㊗️';
    btn.style.display='none';
    
}

//cube calculation app

let cube=()=>{
    let num=document.getElementById('num').value;
    console.log(num);
    let cube=num*num*num;
    let result=cube;
    console.log(result)
    document.getElementById('result').innerText= result;
    document.getElementById('num').value='';
    
    
}

//bill splite app


let bsplite=()=>{
    let ammount=document.getElementById('amount').value;
    let persion=document.getElementById('persion').value;
    let bill=(ammount/persion).toFixed();
    document.getElementById('bill').innerText=bill;
    console.log(bill);
    
}
//random maths problem
let total=0;
let correct=0;
let Score=0;
let num1=Math.floor(Math.random()*100);
let num2=Math.floor(Math.random()*100);
//console.log(num1,num2)
document.getElementById('num1').value=num1;
document.getElementById('num2').value=num2;
total=total+1
document.getElementById('total').innerText=total;

let addition=()=>{
    let usersum=document.getElementById('usersum').value;
    console.log(usersum)
    if(num1+num2==usersum){
        console.log('correct');
        num1=Math.floor(Math.random()*100);
        num2=Math.floor(Math.random()*100);
        document.getElementById('num1').value=num1;
        document.getElementById('num2').value=num2;
        document.getElementById('result').innerText='Correct🎉🎉🎉';
        correct=correct+1
        document.getElementById('correct').innerText=correct;
        let percentage=((correct/total)*100).toFixed(2);
        document.getElementById('percentage').innerText=percentage;
        total=total+1;
        document.getElementById('total').innerText=total;
       
        
        Score=Score+5;
        document.getElementById('score').innerText=Score;
    }else{
        console.log('incorrect');
        document.getElementById('result').innerText='Incorrect🥲🥲 try again';
        let percentage=((correct/total)*100).toFixed(2);
        document.getElementById('percentage').innerText=percentage;
        total=total+1;
        document.getElementById('total').innerText=total;
    }

    document.getElementById('usersum').value="";
   
   
    if(correct*5 == 10){
        let audio = document.getElementById('audio');
        audio.play();

        let a50 = document.getElementById('a50');
        a50.classList.remove('d-none');
        a50.classList.add('achievement-50');
    }
}