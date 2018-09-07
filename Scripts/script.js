var physicalChecked;
var emotionalChecked;
var neglectChecked;
var financialChecked;


function buttonStates() {
    // Get the checkbox
    var physicalButton = document.getElementById("PhysicalButton");
    var emotionalButton = document.getElementById("EmotionalButton");
    var neglectButton = document.getElementById("NeglectButton");
    var financialButton = document.getElementById("FinancialButton");


    // If the checkbox is checked, display the output text
    if (physicalButton.checked == true) {
        //physicalChecked = true;
        sessionStorage.setItem('physicalChecked', JSON.stringify(true));
        console.log("Physical Checked: " +  JSON.parse(sessionStorage.getItem('physicalChecked')));
    } else {
        sessionStorage.setItem('physicalChecked', JSON.stringify(false));
        console.log("Physical Checked: " +  JSON.parse(sessionStorage.getItem('physicalChecked')));
    }

    if (emotionalButton.checked == true) {
        sessionStorage.setItem('emotionalChecked', JSON.stringify(true));
        console.log("Emotional Checked: " +  JSON.parse(sessionStorage.getItem('emotionalChecked')));
    } else {
        sessionStorage.setItem('emotionalChecked', JSON.stringify(false));
        console.log("Emotional Checked: " +  JSON.parse(sessionStorage.getItem('emotionalChecked')));
    }

    if (neglectButton.checked == true) {
        sessionStorage.setItem('neglectChecked', JSON.stringify(true));
        console.log("Neglect Checked: " +  JSON.parse(sessionStorage.getItem('neglectChecked')));
    } else {
        sessionStorage.setItem('neglectChecked', JSON.stringify(false));
        console.log("Neglect Checked: " +  JSON.parse(sessionStorage.getItem('neglectChecked')));
    }

    if (financialButton.checked == true) {
        sessionStorage.setItem('financialChecked', JSON.stringify(true));
        console.log("Financial Checked: " +  JSON.parse(sessionStorage.getItem('financialChecked')));
    } else {
        sessionStorage.setItem('financialChecked', JSON.stringify(false));
        console.log("Financial Checked: " +  JSON.parse(sessionStorage.getItem('financialChecked')));
    }
}

function loadPage() {
    window.location.href = '../Html/questions.html';
}

function setCards() {
    physicalChecked = sessionStorage.getItem('physicalChecked');
    emotionalChecked = sessionStorage.getItem('emotionalChecked');
    neglectChecked = sessionStorage.getItem('neglectChecked');
    financialChecked = sessionStorage.getItem('financialChecked');

    console.log("Physical Checked: " + physicalChecked);
    console.log("Emotional Checked: " + emotionalChecked);
    console.log("Neglect Checked: " + neglectChecked);
    console.log("Financial Checked: " + financialChecked);

    console.log(typeof emotionalChecked);


    if (physicalChecked == 'true') {
        document.getElementById("card1").style.display = "block";
}

    if (emotionalChecked == 'true') {
        document.getElementById("card2").style.display = "block";
    }

    if (neglectChecked == 'true') {
        document.getElementById("card3").style.display = "block";
    }

    if (financialChecked == 'true') {
        document.getElementById("card4").style.display = "block";
    }
}

