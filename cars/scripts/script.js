document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"})
};

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
};

document.getElementById("price-action").onclick = function (){
    if(document.getElementById("name").value === ''){
        alert("Заполните поле имя!")
    } else if(document.getElementById("phone").value === ''){
        alert("Заполните поле телефон!")
    } else if(document.getElementById("car").value === ''){
        alert("Заполните поле автомобиль!")
    } else{
    alert("Спасибо за заявку. Мы свяжемся с вами в ближайшее время!")}
}

