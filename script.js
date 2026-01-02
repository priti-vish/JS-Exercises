const passwordValidator = (password) => {

    if (!password) {

        return "Password cannot be empty. Enter a valid password."
    } else {
        const validPassword = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)
        return (validPassword ? "Password is valid." : "Password is invalid. It must be at least 8 characters long, contain both uppercase and lowercase letters, and include at least one digit.")
    }

}
let btn = document.getElementById("submitBtn")
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let passwordInput = document.getElementById("password").value
    let output = passwordValidator(passwordInput)
    let para = document.getElementById("Msg");

    para.innerText = output
    para.style.color="red"
})