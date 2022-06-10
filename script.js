function getresult() {

      let minc = document.getElementById('monthly-income').value;

      let pincome = Math.round((minc / 100) * 40) ;

      let inv = Math.round((minc / 100) * 20) ;

      let ifix = Math.round((minc / 100) * 20) ;
      let remaina = Math.round(pincome + inv + ifix);

      let finalremain = minc - remaina;

      let fdata = "You should spend on yourself" + pincome + "You should invest " + inv + "You can have EMI's upto " + ifix + ", But you should save " + finalremain;


      document.getElementById("final").innerHTML=fdata;
      // console.log(yinc);
}

function reset() {

document.getElementById('monthly-income').value="";
document.getElementById("final").innerHTML="";

}
