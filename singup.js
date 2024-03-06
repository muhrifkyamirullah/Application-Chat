const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");

form.onsubmit = (e) => {
	e.preventDefault(); //preventing form from submitting
}

continueBtn.onclick = () => {
	console.log("Hello");
}
toggleBtn.onclick = () => {
    if(pswrdField.type == "password"){
        pswrdField.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }

continueBtn.onclick = () => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "signup.php", true);
	xhr.onload = () =>{
		console.log("")
	}
	xhr.send();
}

