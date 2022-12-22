const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("productos carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}"
        <h3>${product.nombre}</h3>
        <p class="price">$ ${product.precio} </p>
    `;

shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
    const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });

    }else {
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });}
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    })
});

// LOCAL STORAGE
const saveLocal = () => {
localStorage.setItem("productos carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("productos carrito"));

// Formulario Email

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_mg8h7fe';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});

// Api NASA Para entrega N*4

let infoNasa = document.querySelector("#infoNasa");

const fetchNasa = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=imNwSQqf3Fur6wJRHDjfZI3F9ruHEuERIIUutc3u");
    const data = await response.json();
    console.log(data);

    const spaceInfo = document.createElement("div");
    spaceInfo.innerHTML = `
    <img src="${data.url}"></img>
    <h4>${data.title}</h4>
    <p>${data.explanation}</p>
    `;
    infoNasa.append(spaceInfo);
};

fetchNasa();