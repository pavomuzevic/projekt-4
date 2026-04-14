const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let valid = true;

    [name, email, message].forEach(el => el.classList.remove("error-border"));
    [nameError, emailError, messageError].forEach(el => {
        el.innerText = "";
        el.classList.remove("show");
    });

    if (name.value.trim() === "") {
        nameError.innerText = "Name is required";
        nameError.classList.add("show");
        name.classList.add("error-border");
        valid = false;
    }

    if (email.value.trim() === "") {
        emailError.innerText = "Email is required";
        emailError.classList.add("show");
        email.classList.add("error-border");
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.innerText = "Enter a valid email";
        emailError.classList.add("show");
        email.classList.add("error-border");
        valid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.innerText = "Message must be at least 10 characters";
        messageError.classList.add("show");
        message.classList.add("error-border");
        valid = false;
    }

    if (!valid) return;

    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        date: new Date().toLocaleString()
    };

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(formData);

    localStorage.setItem("messages", JSON.stringify(messages));
    alert("Message sent!");
    form.reset();
});
