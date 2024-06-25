
var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
    
}
function closemenu(){
    sidemenu.style.right = "-100px";
    
}

/* ------------- for multiple text-----------------*/
var typed = new Typed(".multiple-text", {
    strings: ["Front-end web Developer", "Competitive Programmer", "Flutter Developer"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 2000,
  });

/* ------------------- Deployment ------------------*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwFsfzSj9m4OrjsQSjSYOQgS5uyw1WBvioetW1WlHoege6rg4Olgk2-vhrxgPX3VKuHfA/exec'
  const form = document.forms['submit-to-google-sheet']
  const messagesent = document.getElementById("messagesent")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        messagesent.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            messagesent.innerHTML = ""

        }, 6000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
