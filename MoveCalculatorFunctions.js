function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}	

function getRotations(distance , wheelCircumference){
	var r = distance / wheelCircumference;

	return r;
}

function getDegrees(distance , wheelCircumference){
	var r = getRotations(distance , wheelCircumference);

	var d = r * 360;

	return d;
}

function getCircumference(d){
	var c = Math.PI * d;

	return c;
}

function getDiameter(circumference){
	var d = circumference / Math.PI;

	return d;
}

function get_turnDistance(degrees , oa_distance){
	var d = oa_distance * degrees / 360;

	return d;
}

function get_turnRotations(degrees , oa_distance , wheelCircumference){
	var d = get_turnDistance(degrees , oa_distance);

	var r = getRotations(d , wheelCircumference);

	return r;
}

function get_turnDegrees(degrees , oa_distance , wheelCircumference){
	var r = get_turnRotations(degrees , oa_distance , wheelCircumference);

	var d = r * 360;

	return d;
}
