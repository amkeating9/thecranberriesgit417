
"use strict";

alert("Free shipping with $50 purchases or more!");

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

const form = document.getElementById("fullForm");


function isFormValid() {

    event.preventDefault();

    const name = document.querySelector("#fullName");
    const phone = document.querySelector("#phone");
    const email= document.querySelector("#email");
    const comments = document.querySelector("#comments");
    const errorList = document.getElementById("errorList");


    let errors = [];
    errorList.classList.add("hide");
    name.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");
    comments.classList.remove("error");

    const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
 
  
    name.nextElementSibling.textContent = "";
    phone.nextElementSibling.textContent = "";
    email.nextElementSibling.textContent = "";
    comments.nextElementSibling.textContent = "";
    

    if (!name.value.match(nameRegex)) {
        errors.push("Please provide your full name.");
        name.classList.add("error");
    }
    
 
    if (!phone.value.match(phoneRegex)) {
        errors.push("Invalid phone number.");
        phone.classList.add("error");
    }


    if (!email.value.match(regexEmail) || email.value === "") {
        errors.push("Invalid email address.");
        email.classList.add("error");
    }
    
   
    const radio1 = document.getElementById("selectedPhone");
    const radio2 = document.getElementById("selectedEmail");

    if (!radio1.checked && !radio2.checked) {
        errors.push("Please select a preferred method of contact.");
        radio1.classList.add("error");
        radio2.classList.add("error");
    }


    if (comments.value === "") {
        errors.push("Please leave a comment.");
        comments.classList.add("error");
    }
  
  

document.addEventListener("submit", isFormValid);

const resetButton = document.getElementById("submit");
resetButton.addEventListener("click", () => {
    form.reset();
    errorContainer.innerHTML = "";
    fullName.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    preferredMethodInputs[0].classList.remove("error");
    preferredMethodInputs[1].classList.remove("error");
    comments.classList.remove("error");
});