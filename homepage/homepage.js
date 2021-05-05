$(document).ready(function() {
    $('.jQButton').click(function(){
        $('#ColDiv').css('background-color', this.innerHTML.toLowerCase());
    });
});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#a1").onclick=function(){
        document.getElementById('a1').style.backgroundColor = 'red';
        document.getElementById('question').innerHTML = "Incorrect";
    };
    document.querySelector("#a2").onclick=function(){
        document.getElementById('a2').style.backgroundColor = 'red';
        document.getElementById('question').innerHTML = "Incorrect";
    };
    document.querySelector("#a3").onclick=function(){
        document.getElementById('a3').style.backgroundColor = 'red';
        document.getElementById('question').innerHTML = "Incorrect";
    };
    document.querySelector("#a4").onclick=function(){
        document.getElementById('a4').style.backgroundColor = 'green';
        document.getElementById('question').innerHTML = "Correct";
    };
    document.querySelector("#a5").onclick=function(){
        document.getElementById('a5').style.backgroundColor = 'red';
        document.getElementById('question').innerHTML = "Incorrect";
    };
});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#a6").onclick=function(){
        document.getElementById('a6').style.backgroundColor = 'red';
        document.getElementById('question2').innerHTML = "Incorrect";
    };
    document.querySelector("#a7").onclick=function(){
        document.getElementById('a7').style.backgroundColor = 'green';
        document.getElementById('question2').innerHTML = "Correct";
    };
    document.querySelector("#a8").onclick=function(){
        document.getElementById('a8').style.backgroundColor = 'red';
        document.getElementById('question2').innerHTML = "Incorrect";
    };
    document.querySelector("#a9").onclick=function(){
        document.getElementById('a9').style.backgroundColor = 'red';
        document.getElementById('question2').innerHTML = "Incorrect";
    };
    document.querySelector("#a10").onclick=function(){
        document.getElementById('a10').style.backgroundColor = 'red';
        document.getElementById('question2').innerHTML = "Incorrect";
    };
});