var dataArr1=[0,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
var dataArr=[];
var Arr=[0,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
var done=[];
var winning;
var allow=1;
var equity;
var fwin;

var counter1=0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

dataArr = shuffle(dataArr1);
dataArr2 = dataArr;

function deletenum(data,value){

    var n = data.length;
    for(var i=0;i<n;i++){
        if(data[i]==value)
        {
            data = data.splice(i,1);
        }
    }
}

function mean(data)
{
    var n = data.length;
    var sum = 0;
    for(var i=0;i<n;i++)
    {
        sum = sum + data[i];
    }
    var avg  = sum / n;

    return avg;
}

function answer(data,r){
    var eq = mean(data);

    var final = eq * r * 0.105;

    final = parseInt(final);
    
    return final;
}

function push_num(num1){
    var d = done.length;
    var s = 0;
    for(var i=0;i<=d;i++)
    {
        if(num1==done[i])
        {
            s=s+1;  
        }
    }
    if(s==0)
    {
        done.push(num1);
        counter1 = counter1 + 1;
        offer();
    }
}

function refpage()
{
    window.location.reload();
}

function deal(){
    allow = 0;
    document.getElementById('count2').innerText="Your Winning Prize is $"+winning;
    document.getElementById('btn1').style.display="none";
    document.getElementById('exit').style.display="block"; 
}
function nodeal(){
    allow = 1;
    
    if(counter1==6)
    {
        document.getElementById('count2').innerText = "Pick 5 Cards";
    }
    
    if(counter1==11)
    {
        document.getElementById('count2').innerText = "Pick 4 Cards";
    }
    
    if(counter1==15)
    {
        document.getElementById('count2').innerText = "Pick 3 Cards";
    }
    
    if(counter1==18)
    {
        document.getElementById('count2').innerText = "Pick 2 Cards";
    }
    
    if(counter1==20)
    {
        document.getElementById('count2').innerText = "Pick 1 Card";
    }
    
    if(counter1==21)
    {
        document.getElementById('count2').innerText = "Pick 1 Card";
    }
    
    if(counter1==22)
    {
        document.getElementById('count2').innerText = "Pick 1 Card";
    }

    if(counter1==23)
    {
        document.getElementById('count2').innerText = "Pick 1 Card";
    }
    
    if(counter1==24)
    {
        document.getElementById('count2').innerText = "Pick 1 Card";
    }
    document.getElementById('btn1').style.display="none";   
}

function offer(){
    if(counter1 == 6)
    {
        allow=0;
        winning = answer(Arr,2);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
        
    }
    else if(counter1 == 11)
    {
        allow=0;
        winning = answer(Arr,3);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 15)
    { 
        allow=0;
        winning = answer(Arr,4);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 18)
    {
        allow=0;
        winning = answer(Arr,5);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 20)
    {
        allow=0;
        winning = answer(Arr,6);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 21)
    {
        allow=0;
        winning = answer(Arr,7);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 22)
    {
        allow=0;
        winning = answer(Arr,8);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 23)
    {
        allow=0;
        winning = answer(Arr,9);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 24)
    {
        allow=0;
        winning = answer(Arr,10);
        var w1 = document.getElementById('count2');
        w1.innerText="Your Offer to Exit Game is $" +winning;
        document.getElementById('btn1').style.display="flex";
    }
    else if(counter1 == 1){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 5 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 2){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 4 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 3){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 3 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 4){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 2 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 5){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 1 Card";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 7){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 4 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 8){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 3 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 9){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 2 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 10){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 1 Card";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 12){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 3 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 13){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 2 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 14){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 1 Card";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 16){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 2 Cards";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 17){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 1 Card";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 19){
        allow=1;
        var w1 = document.getElementById('count2');
        w1.innerText="Pick 1 Card";
        document.getElementById('btn1').style.display="none";
    }
    else if(counter1 == 25){
        allow=1;
        fwin=Arr[0];
        var w1 = document.getElementById('count2');
        w1.innerText="Open Your Last Card and Reveal Prize";
        document.getElementById('btn1').style.display="none";
    }
    
    else if(counter1 == 26){
        allow=0;
        winning = fwin;
        var w1 = document.getElementById('count2');
        w1.innerText="Your Winning Prize is $"+winning;
        document.getElementById('btn1').style.display="none";
        document.getElementById('exit').style.display="block"; 
    }
}
function change(num,data){
    if(allow == 1)
    {
        var gi = "grid-item";
        var vb = "vb";
        var val_index = data[num-1];
        var name = gi.concat(num);
        var box = document.getElementById(name);
        box.style.background="greenyellow";
        var money = "$"+" "+val_index;
        box.innerText=money;
        box.style.fontSize= "25px";
        box.style.padding= "20px 0";
        var val_name = vb.concat(val_index);
        var val = document.getElementById(val_name);
        val.style.background="greenyellow";
         // equity = mean(dataArr2);
        
        deletenum(Arr,val_index);
        push_num(num);
    }
}

// deletenum(dataArr,750);
// deletenum(dataArr,100);
// deletenum(dataArr,2000);
// deletenum(dataArr,5);
// deletenum(dataArr,200);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,3));

// deletenum(dataArr,10000);
// deletenum(dataArr,500);
// deletenum(dataArr,20);
// deletenum(dataArr,400);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,4));

// deletenum(dataArr,50);
// deletenum(dataArr,10);
// deletenum(dataArr,1000);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,5));

// deletenum(dataArr,0);
// deletenum(dataArr,300);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,6));

// deletenum(dataArr,3000);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,7));

// deletenum(dataArr,40);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,8));

// deletenum(dataArr,2);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,9));

// deletenum(dataArr,10);
// console.log(dataArr);
// console.log(mean(dataArr));
// console.log(answer(dataArr,10));





