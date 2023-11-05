/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("form");
    let button = document.querySelector('button[type="submit"]')
    let message = document.querySelector(".message")

    console.log(button);
    console.log(form);
    console.log(message);

    button.addEventListener("click", function (e) {
        e.preventDefault();
        // form.submit();
        console.log("test")
        let email = document.querySelector("input[name='email']").value;
        if (email === ""){
            message.textContent = "Enter valid email address.";
        }
        else{
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`
            form.reset();
        }
        
    })
})
