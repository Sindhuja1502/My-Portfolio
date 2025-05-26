/*FOR ABOUT>SKILLS,EDUCATION,EXP HOVER EFFECT*/
var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname,event){
        for(tablink of tablinks){  /* when we click on skills that related info(tabcontents) and underline(tablink) below it is removed */
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){/*tabcontents of skills is gone when hovered^*/
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");/*when hovered on skiils,exp,edu that underlined hover effect is displayed*/
        document.getElementById(tabname).classList.add("active-tab");/*related info when clicked on skills,edu,exp is displayed ,CALLS FUNCTION OPENTAB(TABNAME)*/
    }

      /*used for onlick menu and close icons using js*/
      /*FOR MENU OPTIONS*/
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }
      
      /* Form submit to Google Sheet */
     const scriptURL = 'https://script.google.com/macros/s/AKfycbzgHTi1mYLXc_Z2HTSP7AVI4CrXYhCffobIc3DndgUZX2egOuGZrKWI0p3Q1CXeboUDYg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message sent successfully"    /*used to display this msg when the form in contact section is filled*/
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()   /*resets form after once submitted */
      })
      .catch(error => console.error('Error!', error.message))
  })
