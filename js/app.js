const searcForm = document.querySelector('.search-form');
const searchBtn = document.getElementById('search-btn');

const shoppingCart = document.querySelector('.shopping-cart');
const cartBtn = document.getElementById('cart-btn');

const loginForm = document.querySelector('.login-form');
const loginBtn = document.getElementById('login-btn');

const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('menu-btn');

searchBtn.addEventListener('click', ()=> {
    searcForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
})

cartBtn.addEventListener('click', ()=> {
    shoppingCart.classList.toggle('active');
    searcForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
})

loginBtn.addEventListener('click', ()=> {
    loginForm.classList.toggle('active');
    searcForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
})

menuBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    searcForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
})

window.onscroll = () => {
    searcForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}