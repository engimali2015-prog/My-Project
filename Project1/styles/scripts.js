function calc() {
    let yourName=document.getElementById('your-name');
    let country=document.getElementById('country');
    let arrivelDate=document.getElementById('arrivle-date');
    let depatDate=document.getElementById('departure-date');
    let singleRoom=document.getElementById('single-room');
    let doubleRoom=document.getElementById('double-room');
    let sweet=document.getElementById('sweet');
    let wifiService=document.getElementById('wifi-service');
    let breakfastService=document.getElementById('breakfast-service');
    let poolService=document.getElementById('pool-service');
    let gymService=document.getElementById('gym-service');
    let sum=0;
    const roomvalue = document.querySelector('input[name="roomt"]:checked');
    console.log(yourName.value);
    console.log(country.value);
    console.log(arrivelDate.value);
    console.log(depatDate.value);
    console.log(wifiService.value);
    console.log(breakfastService.value);
    console.log(poolService.value);
    console.log(gymService.value);
    if(singleRoom.checked)
    {
        alert("checked");
    }
}
/*function val() {
    let yourName=document.getElementById('your-name');
    console.log(yourName.value);
    if(yourName.value==""){
        alert("لا يجب ان يكون الاسم فارغاً");
        return false;
    }
}*/
function validateForm() {
    let yourName=document.getElementById('your-name');
    console.log(yourName.value);
    if (yourName.value == "") {
      yourName.style.border="2px solid red";
      document.getElementById("MSG").innerHTML='<span style="color:red;"> يرجى تعبئة حقل الاسم </span>';
    }
  }