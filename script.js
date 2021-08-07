navBar = document.querySelector('.navbar');
items = document.querySelector('.nav-items');
burger = document.getElementById('burger');

burger.addEventListener('click' , ()=>{
    navBar.classList.toggle('h-nav')
    items.classList.toggle('d-items');
}
)