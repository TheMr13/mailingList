



/*
- setVariablesForNewUsers() +
- createAndStoreNewUsernameAndPassword() = are called to create new passwords for login

*/

var usernamev;
var passwordv;

var databaseReturn;

var custURL = "http://drsvmailinglist.azurewebsites.net/api/masterLoginApi";

//URL demo = "http://testinganapp.azurewebsites.net/api/getUsers";
// - "http://testinganapp.azurewebsites.net = name from URL in overview part of web app with database in
// - /api = same always, just saying its an api
// - /getUsers" = name of the api

function createAndStoreNewUsernameAndPassword() { //use this function to create a new password. doesn't necessarily need to be in the code

    usernamev = document.getElementById("userCreate").value;
    passwordv = document.getElementById("passwordCreate").value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", custURL + "?Username=" + usernamev 
    + "&Password=" + passwordv
    , true);
    xhttp.send();
}


function getInfoAndCheckPassword() {
    //document.getElementById("searchResult").innerHTML = null;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", custURL + "?Username=" + document.getElementById("username").value  
    , true);
   xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText); //response becomes an array of objects. each object in the array contains a row from the table.
            //console.log(response);

            databaseReturn = response[0].Password

            if (document.getElementById("password").value == databaseReturn){
                
                window.location = 'search.html'
                
            } else {
                
                document.getElementById("passCheck").innerHTML = "Your username or password is wrong mate. Get a life."
                
            }

        }
    }

    

    
}

function passwordCheck () {

    if (document.getElementById("password").value == databaseReturn){

        window.location = 'search.html'

    } else {

        document.getElementById("passCheck").innerHTML = "Your username or password is wrong mate. Get a life."

    }

}

