const myForm = document.querySelector("#radio-form");

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
const formData = {
    name: 
        form.querySelector("#name").value,
    language:
        form.querySelector('input[name="language"]:checked').value,
    reason:
        form.querySelector("#reason").value
};

console.log(formData);
}


// const inputBox = document.querySelector("#first-name")

// inputBox.addEventListener("input", handleInput)

// function handleInput(event) {
//    console.log("text is here")
// }

// console.log(formData)
