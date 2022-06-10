function getresult() {

      let yinc = document.getElementById('yearly-income').value;

      let nincome = document.getElementById('need').value;

      let inv = document.getElementById('invest').value;

      let ifix = document.getElementById('fix').value;

      let monthsal = yinc / 12;
      let balancea = (monthsal / 100) * 40 ;
      let balanceb = (monthsal / 100) * 20 ;
      let balancec = (monthsal / 100) * 20 ;
      let remaina = balancea + balanceb + balancec;
      let finalremain = monthsal - remaina;
      let fdata = "You should Save" + remaina ;
      document.getElementById("final").innerHTML=fdata;
      // console.log(yinc);
}

function reset() {

document.getElementById('yearly-income').value="";
document.getElementById('need').value="";
document.getElementById('invest').value="";
document.getElementById('fix').value="";
document.getElementById("newres").innerHTML="Please Enter New Details";

}
