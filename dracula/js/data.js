let icone, greet;

let interval = setInterval(function() {
    let currentdate = new Date(); 
    let datetime = ('0' + currentdate.getDate()).slice(-2) + "/"
    + ('0' + currentdate.getMonth()).slice(-2)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + ('0' + currentdate.getHours()).slice(-2) + ":"  
    + ('0' + currentdate.getMinutes()).slice(-2) + ":" 
    + ('0' + currentdate.getSeconds()).slice(-2);

    if (currentdate.getHours() > 5 && currentdate.getHours() < 19) {
        icone = ' <i class="fas fa-sun"></i>';
    } else {
        icone = ' <i class="fas fa-moon"></i>';
    }

    if (currentdate.getHours() > 18) {
        greet = 'Boa noite! ';
    } else if (currentdate.getHours() > 11) {
        greet = 'Boa tarde! ';
    } else {
        greet = 'Bom dia! ';
    }

    document.querySelector('.data').innerHTML = greet + datetime + icone;
},1000);
