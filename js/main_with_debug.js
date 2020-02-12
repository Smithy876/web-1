//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population

	 cityPop = [ //creating an array to populate the table
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$('#mydiv').append('<table>');

	//append a header row to the table
	$('table').append('<tr>');

	//add the "City" and "Population" columns to the header row
	$('tr').append('<th>City</th><th>Population</th>');

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's html string to the table
        $('table').append(rowHtml);
    };

  addColumns(cityPop);
	addEvents();
};

function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>'); //adds header row
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){ // adds city size descriptors
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>'); //appends to table
    	};
    });
};

function addEvents(){

	$('table').mouseover(function(){ //is this accessing the right div??? should it by mydiv instead? if so, that doesn't fix the error in 97

		var color = 'rgb(';

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255); // generates a random number 1-255

			color += random; //adds that number to color

			if (i<2){
				color += ', '; //if there are two or fewer numbers, adds a comma

			} else {
				color += ')'; //if there are three colors, adds an ending parenthesis
			};
		}

		$(this).css('color', color); //tells the table to change to the constructed color
	});  //won't stop giving error: Uncaught SyntaxError: Unexpected token ')'

	function clickme(){ //adds popup for clicking the table

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
