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

(function() {
    emailjs.init("xPGCz6WDJYIL7eHtC"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");

    emailjs.sendForm("service_45jy543", "template_tj7pmb9", this) 
      .then(() => {
        status.innerHTML = "✅ Message sent successfully!";
        this.reset();
      }, (err) => {
        status.innerHTML = "❌ Failed to send message. Please try again.";
        console.error(err);
      });
  });
