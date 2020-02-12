// alertdiv.addEventListener("click", function(){
//     alert("Bonjour!");
// });

// function jsAjax(){
//     // Step 1: Create the request
//     var ajaxRequest = new XMLHttpRequest();
//
//     //Step 2: Create an event handler to send received data to a callback function
//     ajaxRequest.onreadystatechange = function(){
//         if (ajaxRequest.readyState == 4){
//             callback(ajaxRequest.response);
//         };
//     };
//     //Step 3: Open the server connection
//     ajaxRequest.open('GET', 'data/megacities.geojson', true);
//
//     //Step 4: Set the response data type
//     ajaxRequest.responseType = "json";
//
//     //Step 5: Send the request
//     ajaxRequest.send();
// };

//jQuery.get() method...Example 2.5 line 3
//$.get("data/megacities.geojson", callback, "json");

var mydata; //creates variable for data storage

//define callback function
// function callback(response){
//     //tasks using the data go here
//     mydata = response;
//
//     console.log(mydata);
//     console.log(JSON.stringify(response));
// };

// activity 4

function debugAjax(){ //function for making ajax request

//	var mydata;

	$.ajax("data/megacities.geojson", { //file path for json
		dataType: "json", //sets type of file to use
		success: callback //tells what to do on success, i.e. run a callback function
	});

//	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

function callback(response){ //executes script using data retrieved in debugAjax() *after* the page loads so it isn't trying to use data that hasn't been fully loaded yet

  mydata = response //sets data storage variable

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata)); //creates a string out of the geojson and prints it to the page
};

window.onload = debugAjax(); //runs the script
