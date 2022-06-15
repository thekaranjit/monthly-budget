function getresult() {

      let minc = document.getElementById('monthly-income').value;

      let pincome = Math.round((minc / 100) * 40) ;

      let inv = Math.round((minc / 100) * 20) ;

      let ifix = Math.round((minc / 100) * 20) ;
      let remaina = Math.round(pincome + inv + ifix);

      // let finalremain = minc - remaina;

    // let fdata1 = "You should spend on yourself" + pincome + "  You should invest " + inv + "  You can have EMI's upto " + ifix + ",  But you should save " + remaina;
    // let fdata2 = "You should spend on yourself" + pincome + "  You should invest " + inv + "  You can have EMI's upto " + ifix + ",  But you should save " + remaina;
    // let fdata3 = "You should spend on yourself" + pincome + "  You should invest " + inv + "  You can have EMI's upto " + ifix + ",  But you should save " + remaina;

    let fdata1 = "You should spend on yourself: Rs." + pincome;
    let fdata2 = "You should invest: Rs." + inv;
    let fdata3 = "You can have EMI's upto: Rs." + ifix
    let fdata4 = "But you should save: Rs." + remaina;

      document.getElementById("final1").innerHTML=fdata1;
      document.getElementById("final2").innerHTML=fdata2;
      document.getElementById("final3").innerHTML=fdata3;
      document.getElementById("final4").innerHTML=fdata4;

      //document.getElementById('add').value =minc;

      // console.log(yinc);
}

function reset() {

document.getElementById("monthly-income").value="";
// document.getElementById("final").innerHTML=" ";
document.getElementById("final1").innerHTML=" ";
document.getElementById("final2").innerHTML=" ";
document.getElementById("final3").innerHTML=" ";
document.getElementById("final4").innerHTML=" ";
document.getElementById("newres").innerHTML="Please Enter New Details";



}
