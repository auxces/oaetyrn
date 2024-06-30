let x = document.getElementById("background");
let z = 0;


function backgroundSwitch(){
  if (z==0){
    x.src="images/clouds.png";
    z = 1;
  }
  else{
    x.src="images/cloud.png";
    z = 0;
  }

}
  //disable right click just cause y not 
document.addEventListener('contextmenu', event => event.preventDefault());