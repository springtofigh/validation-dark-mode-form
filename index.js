// DARK MOOD

const blackThem = document.querySelector("#them-changer");
blackThem.addEventListener("click" , () => {
        blackThem.classList.toggle('fa-sun');
    if (blackThem.classList.contains('fa-sun')) {
        const color = document.body
        color.classList.add("active");
    } else {
        document.body.classList.remove('active');
    }
})

// VALIDATION
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".pass-input");
const emailMsg = document.querySelector(".wrong-email");
const passwordMsg = document.querySelector(".wrong-pass");
const signinBtn = document.querySelector(".Signin-btn");
signinBtn.addEventListener("click" , signIn);

function signIn (event) {
    event.preventDefault();
    emailMsg.innerText ="";
    passwordMsg.innerText = "";
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    let ifSendData = true

    if (emailValue.length === 0 || emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
        emailMsg.innerText = "Please enter a valid Email."
        ifSendData = false;
    }
    
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password."
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "Your password is too short."
        ifSendData = false;
    }
    
    if (ifSendData) {
        const body = JSON.stringify({
            email:emailValue ,
            password:passwordValue,
        });
        const headers = {
            "Content-Type": "application/json"
        };
        fetch('https://jsonplaceholder.typicode.com/posts' , {
            method:"POST",
            body:body,
            headers:headers
        })
        .then((response) => console.log(response))
    }
}