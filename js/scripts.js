var triangleName = function(input_one, input_two, input_three){
	var sides_array = [];
	var input_one = parseInt(input_one);
	var input_two = parseInt(input_two);
	var input_three = parseInt(input_three);
	if ((input_one + input_two <= input_three) || (input_three + input_two <= input_one) || (input_one + input_three <= input_two)) {
			return ("not a triangle!");
	} else {
		if (input_one === input_two && input_one === input_three){
			return ("its an equilateral traingle!")
		} else if (input_one === input_two || input_one === input_three || input_three === input_two) {
			return ("its a isosceles traingle!")
		} else {
			return ("its a scalene triangle!")
		}
	}
};

$(document).ready(function(){
	$("form#triangleName").submit(function(event){
		var input_one = $("input#input_one").val();
		var input_two = $("input#input_two").val();
		var input_three = $("input#input_three").val();
		var result = triangleName(input_one, input_two, input_three);
		
		$("#triangle_name").text(result);
		
		$(".result").show();
		event.preventDefault();
	});
});