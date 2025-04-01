const cont = document.querySelector(".container");

const careers = ['Python Developer','Full Stack Developer']

let careerindx=0;
let charidx=1;

updateText()
function updateText(){
    cont.innerHTML=`<h1>${careers[careerindx].slice(0,charidx)}</h1>`
    charidx++;
    if(charidx===careers[careerindx].length+1)
    {
        careerindx++;
        charidx=1;
    }
    if(careerindx==careers.length)
    careerindx=0;
    setTimeout(updateText, 300);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent actual form submission
    
    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields are required!");
        return;
    }

    // Redirect to success page (pk.html)
    window.location.href = "pk.html";
});