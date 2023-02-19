function  time(){
    setInterval(() => {
        let a = new Date()
        let h = a.getHours()
        let m = a.getMinutes()
        let s = a.getSeconds()
        let arr=[h,m];
        a = a.toDateString()
        // console.log(a)
        document.getElementById("date").innerHTML = `Date:${a}`
        if (m == 60) {
          document.getElementById("alarm").innerHTML = `1 hour completed`
          
        }
        if (h >=13 && h<=24) {
          document.getElementById("time").innerHTML = `Time:${h}:${m}:${s} PM`
        }
          
        else {
          document.getElementById("time").innerHTML = `Time:${h}:${m}:${s} AM`
        }
        return arr;
      },1000)
  }

  let hour=document.getElementById("hour").value
  let minute=document.getElementById("minute").value
  let arr=time();
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(arr[0]==hour && arr[1]==minute){
        let audio=document.getElementById('music');
        audio.play()
        console.log("Alarm Ringing")
     }
})


  

  

