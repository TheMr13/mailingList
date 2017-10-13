
function setVariables() { //call this function whenever variables a needed in other functions. Called to ensure they are all recent.
    nameInput = document.getElementById("namesub").value; //This is for the input from the field where the user enters their NAME
    ageInput = document.getElementById("agesub").value; //This is for the input from the field where the user enters their AGE
    emailInput = document.getElementById("emailsub").value; //This is for the input from the field where the user enters their EMAIL

    maleRadioInput = document.getElementById("malesub").checked; //For the true/false status of the MALE radio button
   femaleRadioInput = document.getElementById("femalesub").checked; //For the true/false status of the FEMALE radio button

    entertainmentBoxInput = document.getElementById("entersub").checked; //For the true/false status of the ENTERTAINMENT checkbox
    sportBoxInput = document.getElementById("sportsub").checked; //For the true/false status of the SPORTS checkbox
    shoppingBoxInput = document.getElementById("shopsub").checked; //For the true/false status of the SHOPPING checkbox
    technologyBoxInput = document.getElementById("techsub").checked; //For the true/false status of the TECHNOLOGY checkbox
    businessBoxInput = document.getElementById("bussub").checked; //For the true/false status of the BUSINESS checkbox
    lifestyleBoxInput = document.getElementById("lifesub").checked; //For the true/false status of the LIFESTYLE checkbox

    submissionConfirmationParagraph = "confirmation"; //this the id of the paragraph where text is going to appear confirming that the details have been submitted. OPTIONAL

    
}

function setStoredVariablesDisplayLocation() { //This function is where you enter the elements where you want the variables that that have been saved to storage to display
    nameFromStorageDisplay = document.getElementById("finishPageText").innerHTML //Enter the id of where you want each variable to display
    ageFromStorageDisplay = document.getElementById("finishPageText").innerHTML 
    emailFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    genderFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    entertainmentFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    sportFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    shoppingFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    technologyFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    businessFromStorageDisplay = document.getElementById("finishPageText").innerHTML
    lifestyleFromStorageDisplay = document.getElementById("finishPageText").innerHTML
}

/*
List of functions:
- setVariables() +
- getInputValues() = when these two functions are called together they convert all of the input information into variables that can be called by other functions. Call them with/before any other function.
- saveToStorage() = saves all variables to storage that can be called even if the page is refreshed.
- setStoredVariablesDisplayLocation() +
- getFromStorage() = use these to call back the variables that have been save to storage
- postRecordCustomerInfo() = 
*/

/*
Things with the suffix 'v' are a variables that have been created for the purpose of temporary storage.
Things with the suffix 'i' are the ids of elements in the HTML.
Things with no suffix are the references for the storage
Things with the suffic 'Search' are the ids of elements in the HTML that are used to search the database
*/

var namev;
var agev;
var emailv;

var genderSearchInput;

var entertainmentv;
var sportv;
var shoppingv;
var technologyv;
var businessv;
var lifestylev;

var custURL = "http://drsvmailinglist.azurewebsites.net/api/getDRSVcustomerInfo";

//URL demo = "http://testinganapp.azurewebsites.net/api/getUsers";
// - "http://testinganapp.azurewebsites.net = name from URL in overview part of web app with database in
// - /api = same always, just saying its an api
// - /getUsers" = name of the api

function getInputValues (){ // saves name, age and email to storage

    namev = nameInput
    agev = ageInput
    emailv = emailInput

    if (maleRadioInput == true) {
        genderSearchInput = "Male"
    } else if (femaleRadioInput == true){
        genderSearchInput = "Female"
    } else {
        genderSearchInput = "Other"
    }

    entertainmentv = entertainmentBoxInput
    sportv = sportBoxInput
    shoppingv = shoppingBoxInput
    technologyv = technologyBoxInput
    businessv = businessBoxInput
    lifestylev = lifestyleBoxInput

    document.getElementById(submissionConfirmationParagraph).innerHTML = "Your information has been submitted"


    //use this underneath bit to check that the input fields and tick boxes are working
    /*
    document.getElementById("checkingBoxes").innerHTML = " your name = " + namev + " your age = " + agev + " your email = " + emailv +
    "entertainment = " + entertainmentv + " " +  
    "sport = " + sportv + " " +   
    "shopping = " + shoppingv + " " +  
    "technology = " + technologyv + 
    " " +  "business = " + businessv
    */
}


function saveToStorage() {
    localStorage.setItem("name", namev);
    localStorage.setItem("age", agev);
    localStorage.setItem("email", emailv);
    localStorage.setItem("gender", genderSearchInput);
    localStorage.setItem("entertainment", entertainmentv);
    localStorage.setItem("sport", sportv);
    localStorage.setItem("shopping", shoppingv);
    localStorage.setItem("technology", technologyv);
    localStorage.setItem("business", businessv);
    localStorage.setItem("lifestyle", lifestylev);
}

function getFromStorage() {

    
    nameFromStorageDisplay = " " + localStorage.getItem("name") 
    ageFromStorageDisplay = " " + localStorage.getItem("age")
    emailFromStorageDisplay = " " + localStorage.getItem("email")
    genderFromStorageDisplay = " " + localStorage.getItem("gender")
    entertainmentStorageDisplay = " " + localStorage.getItem("entertainment")
    sportStorageDisplay = " " + localStorage.getItem("sport")
    shoppingStorageDisplay = " " + localStorage.getItem("shopping")
    technologyStorageDisplay = " " + localStorage.getItem("technology")
    businessStorageDisplay = " " + localStorage.getItem("business")
    lifestyleStorageDisplay = " " + localStorage.getItem("lifestyle")

}



function postRecordCustomerInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST", custURL + "?Name=" + namev 
    + "&Age=" + agev
    + "&Email=" + emailv
    + "&Gender=" + genderSearchInput
    + "&Entertainment=" + entertainmentv
    + "&Sport=" + sportv
    + "&Shopping=" + shoppingv
    + "&Technology=" + technologyv
    + "&Business=" + businessv
    + "&Lifestyle=" + businessv
    , true);
    xhttp.send();

    alert("Your information has been submitted")
}

//the following is so I can access these variables outside of the function that sets them


var nameInput;
var emailInput;
var maleRadioInput;
var femaleRadioInput;
var entertainmentBoxInput;
var sportBoxInput;
var shoppingBoxInput;
var technologyBoxInput;
var businessBoxInput;
var lifestyleBoxInput;
var submissionConfirmationParagraph;
var nameFromStorageDisplay;
var ageFromStorageDisplay;
var emailFromStorageDisplay;
var genderFromStorageDisplay;
var entertainmentFromStorageDisplay;
var sportFromStorageDisplay;
var shoppingFromStorageDisplay;
var technologyFromStorageDisplay;
var businessFromStorageDisplay;
var lifestyleFromStorageDisplay;
