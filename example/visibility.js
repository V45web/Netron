// Function to show/hide an element
function visibility(className,condition) {
	if (className && condition != undefined){ // Check if function is defined.
	 	let output = document.querySelectorAll(`.${className}`); // Find all elements with matching class name.
	 		if (output.length > 0) {
	 			output.forEach(element => {
	 			// main code.
	 			
	 			if (condition == true){ // Check if visibility is true if not then it false.
	 				element.style.display = 'inline-block'; // show the element
	 			}else{
	 				element.style.display = 'none'; // hide the element
	 			}
	 			
	 			// main code.
	 		});
	 		} else {
	 			console.error(`Elements with class "${className}" not found!`); // Log error.
	 		}
	 }else{
	 	console.error("className Or condition is not defined."); // Log error if className/colorId is not defined.
	 }
}
