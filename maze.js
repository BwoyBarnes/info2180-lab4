var boundaries;
var end;
window.onload = function() {
    //var boundary1 = document.getElementById("boundary1");
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    end.onmouseover = CheckWin;
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = overBounds;
	}
}

    //Test Code
    //var myElement = document.getElementById("boundary1");
	//myElement.style.backgroundColor = "red";
	//boundary1.style.backgroundColor = div.youlose.backgroundColor;
	//document.getElementById("boundary1").style.backgroundColor = "red";
function overBounds(){
		if(!hasClass(boundaries[0], "youlose")) // Checks if the youlose class has been applied to at least one of the divs already
		{
			for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}



function CheckWin(){
	if(!hasClass(boundaries[0], "youlose")){
		alert("You Win!!!");
	}

}


//Used to check if a div element already has the youlose colour applied to it to prevent
//the onmouseover event from adding multiple instances of the class the the element
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

