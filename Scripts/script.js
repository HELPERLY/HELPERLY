var physicalChecked = false;
var financialChecked = false;
var emotionalChecked = false;


function choosePhysical(){
    if (physicalChecked == false){
        document.getElementById('physicalAbuseInput').src="../Images/physicalAbuseSelected.png";
        document.getElementById('physicalAbuseInput').style.opacity=0.5;
        physicalChecked = true;
        sessionStorage.setItem('physicalChecked', JSON.stringify(true));
        console.log("Physical Checked: " +  JSON.parse(sessionStorage.getItem('physicalChecked')));
    }
    else{
        document.getElementById('physicalAbuseInput').src="../Images/physicalAbuse.png";
        document.getElementById('physicalAbuseInput').style.opacity=1;
        physicalChecked = false;
        sessionStorage.setItem('physicalChecked', JSON.stringify(false));
        console.log("Physical Checked: " +  JSON.parse(sessionStorage.getItem('physicalChecked')));
    }
}

function chooseFinancial(){
    if (financialChecked == false){
        document.getElementById('financialAbuseInput').src="../Images/financialAbuseSelected.png";
        document.getElementById('financialAbuseInput').style.opacity=0.5;
        financialChecked = true;
        sessionStorage.setItem('financialChecked', JSON.stringify(true));
        console.log("Financial Checked: " +  JSON.parse(sessionStorage.getItem('financialChecked')));
    }
    else{
        document.getElementById('financialAbuseInput').src="../Images/financialAbuse.png";
        document.getElementById('financialAbuseInput').style.opacity=1;
        financialChecked = false;
        sessionStorage.setItem('financialChecked', JSON.stringify(false));
        console.log("Financial Checked: " +  JSON.parse(sessionStorage.getItem('financialChecked')));
    }
}

function chooseEmotional() {
    if (emotionalChecked == false) {
        document.getElementById('emotionalAbuseInput').src = "../Images/emotionalAbuseSelected.png";
        document.getElementById('emotionalAbuseInput').style.opacity = 0.5;
        emotionalChecked = true;
        sessionStorage.setItem('emotionalChecked', JSON.stringify(true));
        console.log("Emotional Checked: " + JSON.parse(sessionStorage.getItem('emotionalChecked')));
    }
    else {
        document.getElementById('emotionalAbuseInput').src = "../Images/emotionalAbuse.png";
        document.getElementById('emotionalAbuseInput').style.opacity = 1;
        emotionalChecked = false;
        sessionStorage.setItem('emotionalChecked', JSON.stringify(false));
        console.log("Emotional Checked: " + JSON.parse(sessionStorage.getItem('emotionalChecked')));
    }
}

function loadPage() {
    if (!physicalChecked && !financialChecked && !emotionalChecked) {
        alert("Please select at least one category!");
        return;
    }

    window.location.href = 'Html/question_page.html';
}

function setCards() {
    physicalChecked = sessionStorage.getItem('physicalChecked');
    emotionalChecked = sessionStorage.getItem('emotionalChecked');
    financialChecked = sessionStorage.getItem('financialChecked');

    console.log("Physical Checked: " + physicalChecked);
    console.log("Emotional Checked: " + emotionalChecked);
    console.log("Financial Checked: " + financialChecked);


    if (physicalChecked == 'true') {
        document.getElementById("card1").style.display = "block";
    }

    if (financialChecked == 'true') {
        document.getElementById("card2").style.display = "block";
    }

    if (emotionalChecked == 'true') {
        document.getElementById("card3").style.display = "block";
    }
}

function resetCardStates() {
    physicalChecked = false;
    financialChecked = false;
    emotionalChecked = false;

    sessionStorage.setItem('physicalChecked', JSON.stringify(false));
    sessionStorage.setItem('financialChecked', JSON.stringify(false));
    sessionStorage.setItem('emotionalChecked', JSON.stringify(false));

    console.log("Physical Checked: " + physicalChecked);
    console.log("Emotional Checked: " + emotionalChecked);
    console.log("Financial Checked: " + financialChecked);
}

function calc(){
    var temp;
    var physicalRisk = 0;

    for (i = 1; i < 13; i++)
    {
        temp = 'op' + i;

        if(document.getElementById(temp).checked)
        {
            physicalRisk = physicalRisk + parseInt(document.getElementById(temp).value);
            sessionStorage.setItem('physicalNo', JSON.stringify(physicalRisk));
        }
    }
}