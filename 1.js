function toUpperCase() {
    document.getElementById('toUpperCase').onclick = function() {
        var UpperString = document.getElementById('MainText').value.toUpperCase()
        document.getElementById('MainText').value = UpperString
    }
}

function toLowerCase() {
    document.getElementById('toLowerCase').onclick = function() {
        var LowerString = document.getElementById('MainText').value.toLowerCase()
        document.getElementById("MainText").value = LowerString
    }
}

// let zmienna1 = document.getElementById('MainText').value;

function Gora() {
    document.getElementById('Gora').onclick = function() {
        var Gora = document.getElementById('MainText').value.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
        document.getElementById("MainText").value = Gora;
    }
}

function TwoWord() {
    document.getElementById("TwoWord").onclick = function() {
        var gora1 = document.getElementById("MainText").value.split("").map((s,i) => i % 2 != 0 ? s.toUpperCase() : s).join("");
        document.getElementById("MainText").value = gora1;
    }
    
}

function InputSpace() {
    document.getElementById('InputSpace').onclick = function() {
        var Input1 = document.getElementById("input1").value;
        var InputSpace1 = document.getElementById('MainText').value;
        document.getElementById("MainText").value =  InputSpace1.split(' ').map(x=> x  + Input1).join(" ")
    }
}

function InputSpaceOne() {
    document.getElementById("InputSpaceOne").onclick = function() {
        var Input2 = document.getElementById("input2").value;
        var InputSpaceOne = document.getElementById("MainText").value;
        document.getElementById("MainText").value = InputSpaceOne.split(" ").map(x=> Input2 + x).join(" ")
    }
}

function UsunText() {
    document.getElementById("UsunText").onclick = function() {
        var input40 = document.getElementById("input40");
        var tekstowy = document.getElementById("MainText");
        

        tekstowy.value = tekstowy.value.replace(input40.value, "");
}}

function DELETE() {
    document.getElementById("DELETE").onclick = function() {
        document.getElementById("MainText").value = ""
    }
}

function COPY() {
    var CopyText = document.getElementById("MainText");
    
    


    CopyText.select();
    CopyText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(CopyText.value);
}


function interpunkcyjne() {
        document.getElementById("interpunkcyjne").onclick = function() {

        var gluwny = document.getElementById("MainText");
        gluwny.value = gluwny.value.replace(/[!,!@#$%^&*()_+=}{|":?><}.]/gi, '')
        }
}

function literki() {
    document.getElementById("UsunLiterki").onclick = function() {
        var gluwny1 = document.getElementById("MainText");
        gluwny1.value = gluwny1.value.replace(/[1234567890+-=]/gi, "")
    }
}

//
function spolgloski() {
    document.getElementById("spolgloski").onclick = function() {
        var gluwny2 = document.getElementById("MainText");
        gluwny2.value = gluwny2.value.replace(/[bdgwzźżlłrmnjdzdźdżptkfsśszcćczchń]/gi,"")
    }
}

function samogloski() {
    document.getElementById("samogloski").onclick = function() {
        var gluwny3 = document.getElementById("MainText");
        gluwny3.value = gluwny3.value.replace(/[aąeęiouy]/gi , "")
    }
}



function literki() {
    document.getElementById("literki").onclick = function() {
        var gluwny4 = document.getElementById("MainText");
        gluwny4.value = gluwny4.value.replace(/[qwertyuiopasdfghjklmnbvcxzą€óąśśąłćźżń]/gi, "")
    }
}

function spacje() {
    document.getElementById("spacje").onclick = function() {
        var gluwny5 = document.getElementById("MainText");
        gluwny5.value = gluwny5.value.replace(/\s/g, "")
    }
}

