//part 1
// function is called when the  button is clicked, the text "I'm right" should be placed next to it. 
 
function fightFirst(){
	let p1Button=document.querySelector("#firstBtn");
    document.getElementById("Message").innerHTML = "I'm right!";
   

};

//function is called when the  button is clicked, the text is replaced with, "No, I'm right!"
function fightSecond(){
	let p2Button=document.querySelector("#secondBtn");
 	document.getElementById("Message").innerHTML = "No I'm right!";
}

//part 2
// function sends a alert stating "Hey, I told you not to hover over me! when hovering over h1"

function hovering(){
	let titleHover=document.querySelector('#hovering');
    alert("Hey, I told you not to hover over me!");
};

//part 3-4
/* checks the following things:
   if the  password is 12345678, the h1 tag changes to welcome!
    else password is incorrect, alert message is sent 

*/

function myfunction(){
	let password=document.getElementById("password").value;
	let fail=true;
    if (password != 12345678){
    	correct=true;
    	alert("password is incorrect");
    	document.getElementById("title").innerHTML = "Login";
    	

    }
    else{
      document.getElementById("title").innerHTML = "Welcome!";

    }
     
};

//bonus
// function that outputs the volume of a sphere given the user input of radius
function sphereVolume(){
	let radius=document.getElementById("radius").value;
	let volume; 
	radius = Math.abs(radius); // get the absolute value 
  	volume = (4/3) * Math.PI * Math.pow(radius, 3);
  	volume = volume.toFixed(3); // round to 3 decimal places
  	document.getElementById("answer").innerHTML = volume;
  


}


































