


var custURL = "http://drsvmailinglist.azurewebsites.net/api/getDRSVcustomerInfo";

//URL demo = "http://testinganapp.azurewebsites.net/api/getUsers";
// - "http://testinganapp.azurewebsites.net = name from URL in overview part of web app with database in
// - /api = same always, just saying its an api
// - /getUsers" = name of the api


function getRecordCustomerInfo() {
    //document.getElementById("searchResult").innerHTML = null;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText); //response becomes an array of objects. each object in the array contains a row from the table.
            //console.log(response);

            var queryResult;
            for (var i = 0; i < response.length; i++) {
              queryResult += response[i].Name 
              + " " + response[i].Age 
              + " " + response[i].Email 
              + " " + response[i].Gender 
              + " " + response[i].Entertainment
              + " " + response[i].Sport 
              + " " + response[i].Shopping 
              + " " + response[i].Technology 
              + " " + response[i].Business 
              + " " + response[i].Lifestyle 
              + "<br> ";
            }

           
            if (queryResult == undefined) {
                document.getElementById("searchResult").innerHTML = "There are no results that match your search"
            } else {
                document.getElementById("searchResult").innerHTML = queryResult;
            }
        }
    };

    var genderSearchInput;
    if (document.getElementById("anyser").checked == true){
        genderSearchInput = ""
    } else if (document.getElementById("maleser").checked == true) {
        genderSearchInput = "Male"
    } else if (document.getElementById("femaleser").checked == true){
        genderSearchInput = "Female"
    } else {
        genderSearchInput = "Other"
    }

    xhttp.open("GET", custURL + "?Name=" + document.getElementById("nameser").value
     + "&Age=" + document.getElementById("ageser").value  
     + "&Email=" + document.getElementById("emailser").value
     + "&Gender=" + genderSearchInput
     + "&Entertainment=" + document.getElementById("enterser").checked
     + "&Sport=" + document.getElementById("sportser").checked
     + "&Shopping=" + document.getElementById("shopser").checked
     + "&Technology=" + document.getElementById("techser").checked
     + "&Business=" + document.getElementById("busser").checked
     + "&Lifestyle=" + document.getElementById("lifeser").checked
     + "&OR=" + document.getElementById("orser").checked
     + "&AND=" + document.getElementById("andser").checked
     , true);
    xhttp.send();
}