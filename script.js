// focus on load
(
    function ()
    {
        window.addEventListener("load", function ()
        {
            const focusInput = document.querySelector(".fname__wrapper > input");
            focusInput.focus();
        });
    }
)();
// form validation
(function ()
{
    const fnameInput = document.querySelector("#fname");
    const lnameInput = document.querySelector("#lname");
    const emailInput = document.querySelector("#email");
    const phoneNumberInput = document.querySelector("#phone_number");
    const pswdInput = document.querySelector("#password");
    const confirmPswdInput = document.querySelector("#confirm_password");
    const form = document.querySelector(".form");

    form.addEventListener("submit", validateForm);

    function validateForm(evt)
    {
        evt.preventDefault();
        const fname = evt.target.elements["fname"].value;
        const lname = evt.target.elements["lname"].value;
        if(fname != "" && lname != ""){
            fnameInput.style.border = "1.8px solid green";
            lnameInput.style.border = "1.8px solid green";
        
        }
        const email = evt.target.elements["email"].value;
        
        const validEmail = validateEmail(email);
        const phone = evt.target.elements["phone_number"].value;
        if (phone != ""){
            phoneNumberInput.style.border = "1.8px solid green";

        }
        const password = evt.target.elements["password"].value;
        const confirmPassword = evt.target.elements["confirm_password"].value;
        validatePassword(password, confirmPassword);
    }
    function validateEmail(email)
    {
        const emailErr = document.querySelector(".email__err");
        emailErr.innerText = "";
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        const validEmail = re.test(email);
        if (validEmail){
            emailInput.style.border = "1.8px solid green";
            return email;
        }
        emailErr.innerText = "*Please provide a valid email";
        emailInput.focus();
        emailInput.style.border = "1.8px solid red";
    }
    function validatePassword(password, confirmPassword){
        const pswdErr = document.querySelector(".password__err");
        pswdErr.innerText = "";
        if (password != confirmPassword){
            pswdInput.style.border = "1.8px solid red";
            // pswdInput.previousElementSibling.style.color = "red";
            pswdInput.style.color = "red";
            pswdErr.innerText = "*Passwords do not match";

            confirmPswdInput.style.border = "1.8px solid red";
            confirmPswdInput.style.color = "red";
            // confirmPswdInput.previousElementSibling.style.color = "red";
            return;
        }
        pswdInput.style.border = "1.8px solid green";
        pswdInput.style.color = "green";

        // pswdInput.previousElementSibling.style.color = "blue";
        confirmPswdInput.style.border = "1.8px solid green";
        confirmPswdInput.style.color = "green";

        // confirmPswdInput.previousElementSibling.style.color = "blue";
    }
    // function styleBorderInput(field, err,){
        
    // }
})();