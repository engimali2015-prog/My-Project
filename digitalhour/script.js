function updateClock() {
const nowdate=new Date();
    const hours=string(nowdate.getHours()).toString().padStart(2,'0');
    const minutes=string(nowdate.getMinutes()).toString().padStart(2,'0');
    const seconds=string(nowdate.getSeconds()).toString().padStart(2,'0');
    const timeString=hours+":"+minutes+":"+seconds;
    document.getElementById('clock').textContent=timeString;
}
setInterval(updateClock,1000);

updateClock() ;

