function validateStr() {
	var text = "";
	check = true;
	input = document.getElementById("brack").value;
	let stack = [];

	for (let ch of input.split("")) {
		if(ch == "(") stack.push(")");
		else if(ch == "[") stack.push("]");
		else if(ch == "<") stack.push(">");
		else if(ch == ")" || ch == "]" || ch == ">") {
				if (stack[stack.length - 1] == ch) stack.pop();
				else {
					check = false;
					text = "Скобки не сбалансированы.";
					break;
				}
		}
	}
	if (stack.length != 0 && check) {
		check = false;
		text = "Не хватает закрывающих скобок."
	}
	
	if (check) text = "Скобки сбалансированы";
	
	document.getElementById("demo").innerHTML = text;
	return check;
}
