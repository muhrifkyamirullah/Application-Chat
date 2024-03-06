const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");

form.onsubmit = (e) => {
	e.preventDefault(); //preventing form from submitting
}

continueBtn.onclick = () => {
	console.log("Hello");
}

continueBtn.onclick = () => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "signup.php", true);
	xhr.onload = () =>{
		console.log("")
	}
	xhr.send();
}
