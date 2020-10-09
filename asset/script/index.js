let closeWarning = () => { // CLose top warning
    return document.getElementById('warning').style.display = 'none';
}

let helpOpen = false;
let help = () => { //show or close How it work
    if (helpOpen == false) {
        document.getElementById('how').style.display = 'block';
        helpOpen = true;
    }   
    else {
        document.getElementById('how').style.display = 'none';
        helpOpen = false;
    } 
}



