function toUpperCase() {
        var UpperString = document.getElementById('MainText').value.toUpperCase()
        document.getElementById('MainText').value = UpperString
}

function toLowerCase() {
  
        var LowerString = document.getElementById('MainText').value.toLowerCase()
        document.getElementById("MainText").value = LowerString;
    
}

// let zmienna1 = document.getElementById('MainText').value;

function Gora() {

        var Gora = document.getElementById('MainText').value.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
        document.getElementById("MainText").value = Gora;

}

function TwoWord() {

        var gora1 = document.getElementById("MainText").value.split("").map((s,i) => i % 2 != 0 ? s.toUpperCase() : s.toLowerCase()).join("");
        document.getElementById("MainText").value = gora1;

    
}

function InputSpace() {

        var Input1 = document.getElementById("input1").value;
        var InputSpace1 = document.getElementById('MainText').value;
        document.getElementById("MainText").value =  InputSpace1.split(' ').map(x=> x  + Input1).join(" ")

}

function InputSpaceOne() {

        var Input2 = document.getElementById("input2").value;
        var InputSpaceOne = document.getElementById("MainText").value;
        document.getElementById("MainText").value = InputSpaceOne.split(" ").map(x=> Input2 + x).join(" ")

}

function UsunText() {

        var input40 = document.getElementById("input40");
        var tekstowy = document.getElementById("MainText");
        

        tekstowy.value = tekstowy.value.replaceAll(input40.value, "");
}
function DELETE() {

        document.getElementById("MainText").value = "";

        
        document.getElementById("Tekst-Skopiowany").innerHTML  = " ❌ | Tekst usunięty!";
        v = 0;
        var boksik = document.getElementById("Tekst-Skopiowany");
        boksik.style.background = "red";


        showWordCount.innerHTML = (
                "<br>Ilość wyrazów: 0"

        );
        
        iloscslow.innerHTML = `Ilość słów : 0`

        setTimeout(() => {
            boksik.style.display = 'none';
            
        }, 5000);
        

        if(boksik.style.display == "none") {
            return     boksik.style.display = "block";
        }
    }


function COPY() {
    // copy text
    var CopyText = document.getElementById("MainText");
    CopyText.select();
    CopyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(CopyText.value); 


    // edycja <P>
    document.getElementById("Tekst-Skopiowany").innerHTML  = "✅ | Tekst Skopiowany!";
    var boks = document.getElementById("Tekst-Skopiowany");
    boks.style.background = "green";



    setTimeout(() => {
        boks.style.display = 'none';
    }, 5000);

    if(boks.style.display == "none") {
        return boks.style.display = "block"
    }

}


function interpunkcyjne() {


        var gluwny = document.getElementById("MainText");
        gluwny.value = gluwny.value.replace(/[!,!@#$%^&*()_+=}{|":?><}.]/gi, '')
        }


function cyfry() {

        var gluwny1 = document.getElementById("MainText");
        gluwny1.value = gluwny1.value.replace(/[1234567890+-=]/g, "")
    }


//
function spolgloski() {

        var gluwny2 = document.getElementById("MainText");
        gluwny2.value = gluwny2.value.replace(/[bdgwzźżlłrmnjdzdźdżptkfsśszcćczchńq]/gi,"")
    }


function samogloski() {

        var gluwny3 = document.getElementById("MainText");
        gluwny3.value = gluwny3.value.replace(/[aąeęiouy]/gi , "")
    }




function literki() {

        var gluwny4 = document.getElementById("MainText");
        gluwny4.value = gluwny4.value.replace(/[qwertyuiopasdfghjklmnbvcxzą€óąśśąłćźżń]/gi, "")
    }


function spacje() {

        var gluwny5 = document.getElementById("MainText");
        gluwny5.value = gluwny5.value.replace(/\s/g, "")

}



function GLITCH() {

        var gluwny6 = document.getElementById("MainText");
        gluwny6.value = gluwny6.value.replace(/a/gi, "a̵͎͕͖̯͘ͅ")
        gluwny6.value = gluwny6.value.replace(/b/gi, "b̸̺͎̅̀͗̚")
        gluwny6.value = gluwny6.value.replace(/c/gi, "c̷̛̹̣͓̼̻̃͂̓̔͛")
        gluwny6.value = gluwny6.value.replace(/d/gi, "d̸̜̻͎̥̍͛̍̾")
        gluwny6.value = gluwny6.value.replace(/e/gi, "ȩ̴͓̼̺̪̯̝̿͆͒")
        gluwny6.value = gluwny6.value.replace(/f/gi, "f")
        gluwny6.value = gluwny6.value.replace(/g/gi, "g")
        gluwny6.value = gluwny6.value.replace(/h/gi, "h̴̛̰̱̪́̔̈́̑̆̀͘")
        gluwny6.value = gluwny6.value.replace(/i/gi, "i̸͚̼̇̃")
        gluwny6.value = gluwny6.value.replace(/j/gi, "j̵̰̺͎̫̳̭͚̫̆̍̋ͅ")
        gluwny6.value = gluwny6.value.replace(/k/gi, "k̶̮̼̦̻̗̝͚̄͑͜͜ͅ")
        gluwny6.value = gluwny6.value.replace(/l/gi, "l̷̢̗͉̭̩̩͓̹̤͝ͅ")
        gluwny6.value = gluwny6.value.replace(/m/gi, "m̶̭͍̘̳̱̭̋͆͐̋̏̀͜")
        gluwny6.value = gluwny6.value.replace(/n/gi, "n̶̻̤̝̥̹̗̈́̍̾̂̈̓͗͘͜͝")
        gluwny6.value = gluwny6.value.replace(/o/gi, "o̸͖̘͛̓͐̿")
        gluwny6.value = gluwny6.value.replace(/p/gi, "p̷̻̘̥̳̯̻͈̆̐̐̾̉̾͌͂̌̚͜")
        gluwny6.value = gluwny6.value.replace(/r/gi, "r̶̺̖̼̖̰͕̽͐̏̒͗͒̈")
        gluwny6.value = gluwny6.value.replace(/s/gi, "s̵͙̼͎̳̑̇̊̍")
        gluwny6.value = gluwny6.value.replace(/t/gi, "t̵̢̡͓͚̬̥̺͉̩͖́̄̂̀̆̈͂")
        gluwny6.value = gluwny6.value.replace(/u/gi, "u")
        gluwny6.value = gluwny6.value.replace(/w/gi, "ẅ̶̖̣́̉̕")
        gluwny6.value = gluwny6.value.replace(/y/gi, "ý̸̢̻̳̣͓̘͐̾̉͘̕")
        gluwny6.value = gluwny6.value.replace(/z/gi, "z̸͓̟̑͒̕")  
    }


function Tytul() {



        var input33 = document.getElementById("MainText");
        input33.value = input33.value.split(".").map(x=>  x.charAt(0).toUpperCase() +  x.toLowerCase().slice(1)).join(".");

        
}
    

function UsunTextPojedynczo() {
        var input41 = document.getElementById("input41");
        var tekstowy41 = document.getElementById("MainText");

        tekstowy41.value = tekstowy41.value.replace(input41.value, "");
}




// glosnosc 11
const textarea = document.getElementById("MainText");


const characterCountDisplay  = document.getElementById('characterCount');

textarea.addEventListener('input', updateCharacterCount);




function updateCharacterCount() {
        const textarea = document.getElementById("MainText");


        const characterCountDisplay  = document.getElementById('characterCount');

        textarea.addEventListener('input', updateCharacterCount);

        const tekst = textarea.value;


 
        const characterCount = tekst.replace(/\s/g, "").length;


        iloscslow.textContent = `Ilość słów : ${characterCount}`
}


function count_word( val ){
        var wom = val.match(/\S+/g);
        return {
                words : wom  ? wom.length : 0
        };
}

        var textContent = document.getElementById("MainText");
        var showWordCount = document.getElementById("countWord");

                textContent.addEventListener("input",function() {
                        var v = count_word(this.value);
                        showWordCount.innerHTML = (
                                "<br>Ilość wyrazów: "+ v.words
                        );
                },false )




function generator(length) {
   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzżźćńęąś0123456789";
                let randomString = "";
                for(let i = 0; i < length;i++) {
                        randomString += characters[Math.floor(Math.random() * characters.length)];
                        
                } return randomString;
                }                

function generator1() {
        var input422 = document.getElementById("input422").value;
        showWordCount.innerHTML = (
                `<br>Ilość wyrazów: 1`

        );
        iloscslow.innerHTML = `Ilość słów : ${input422}`
        document.getElementById('MainText').value = generator(input422)
}


function getMiddle(s) {
        return Math.floor(s.length / 2);
}
 
// Given string str

//          getMiddle(s) + s[8]
// Function Call
function koniecslowa() { 

        var input433 = document.getElementById("input433").value;

 



        document.getElementById('MainText').value =  document.getElementById("MainText").value.split("").map(x=>  x + input433+x.toLowerCase().slice(1)).join("");
        

}


function srodekzdania() {
        var inputy4444 = document.getElementById("srodekzdaniainput");
       
        var tekstyy33 = document.getElementById("MainText");
       
        var zbior = getMiddle(inputy4444);

        /*to change */
}
