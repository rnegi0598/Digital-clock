function displayTime(){
    var dateTime=new Date(); //return time in 24hr format
    var hours=dateTime.getHours();
    var minutes=dateTime.getMinutes();
    var seconds=dateTime.getSeconds();
    var period=document.getElementById("period");
    if(hours>12){
        period.innerText="pm";
    }else{
        period.innerText="am";
    }
    var hourElement=document.getElementById("hour");
    var minElement=document.getElementById("min");
    var secElement=document.getElementById("sec");
    if(hours>12){
        hours=hours-12;
    }
    hourElement.innerText=hours;
    minElement.innerText=minutes;
    secElement.innerText=seconds;
}
setInterval(displayTime,1000);





//change background with time ,
//eg morning time background should be bright and night time dull