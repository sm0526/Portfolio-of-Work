var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFl0OG7pptwP67UB4upTz7GvO55aghdVqQ6LmCeesW1n3UetDZ1HrYVUHy6c83B9JYgA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

function openmenu(){
    sidemenu.style.right = "0";
};

function closemenu(){
    sidemenu.style.right = "-200px";
};

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})