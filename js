let cart = [];
let total = 0;

function addToCart(name,price){

cart.push({name,price});
total += price;

updateCart();

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

let list = document.getElementById("cart-items");
list.innerHTML="";

cart.forEach(item=>{
let li=document.createElement("li");
li.innerText=item.name+" - ₹"+item.price;
list.appendChild(li);
});

document.getElementById("total").innerText=total;

}

function toggleCart(){

let cartBox=document.getElementById("cart");

if(cartBox.style.display==="block")
cartBox.style.display="none";
else
cartBox.style.display="block";

}

function checkout(){

alert("Order placed successfully!");

cart=[];
total=0;

updateCart();

}
