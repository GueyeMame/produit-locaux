let menu = document.querySelector(".burgeur");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
};

lefshoppingcart = document.querySelector('shopping-cart')
document.querySelector('#cart-btn').onclick =() =>{
    shoppingcart.classList.toggle('active');
}