
//   This line selects an HTML element with the class "login-form" that 
//   is a descendant of an element with the class "header" in the document. 
//   It uses the querySelector method to find the element and assigns it to 
//    the variable loginForm
let navbar = document.querySelector('.header .navbar');
    document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

// this code handles the scroll event on the web page. It removes the "active" 
// class from the loginForm and navbar elements. Additionally, it adds the "active" 
// class to the element with the class "header" when the page is scrolled, and 
// removes it when the page is at the top. 

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

// this code is executed when the web page finishes loading. It checks the scroll 
// position of the page and adds the "active" class to the element with the class 
// "header" if the page has been scrolled, or removes the "active" class if the page 
// is at the top. The purpose of adding or removing the "active" class depends on 
// the specific CSS styles and functionality associated with this class.

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

$(document).ready(function() {
 $('#login-form').submit(function(event) {
   event.preventDefault(); // prevent form from submitting

   // get input values
   var email = $('#email').val();
   var password = $('#password').val();

   // check if email and password are correct
   if (email === 'admin@gmail.com' && password === 'admin') {
     // redirect to home page
    alert('Login Successful');
     window.location.href = 'index.html';
   } else {
     // show error message
     alert('Invalid email or password.');
   }
 });
});