function headerComponent(el){
const headerEl = document.createElement("div")
headerEl.innerHTML = `
<header class="header">

<a href="./index.html" class="boton__inicio">

<img src="./logo.png" alt="" class="header__logo">
</a>

<div class="header__icono-menu">
    <button class="header__abrir-menu"><img src="https://cdn-icons-png.flaticon.com/512/6704/6704965.png" alt="" class="header__abrir-menu-icono"></button>
</div>
<div class="header__ventana-cont">

    <div class="header__ventana">
        <button class="header__cerrar-ventana"><img src="https://cdn-icons-png.flaticon.com/512/660/660252.png" alt="" class="header__cerrar-ventana-icono"></button>
        
        <ul class="header__ventana-menu">
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li><a href="./servicios.html">Servicios</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
            <li><a href="./index.html">Inicio</a></li>
        </ul>
    </div>
</div>
<ul class="header__nav-menu">
    <li><a href="./portfolio.html">Portfolio</a></li>
    <li><a href="./servicios.html">Servicios</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
</ul>
</header>
` 
const botonAbrirMenuEl = headerEl.querySelector(".header__abrir-menu")
const botonCerrarMenuEl = headerEl.querySelector(".header__cerrar-ventana")
const ventanaMenuEl = headerEl.querySelector(".header__ventana-cont")

botonAbrirMenuEl.addEventListener("click",()=>{
    ventanaMenuEl.style.display = "inherit";
})
botonCerrarMenuEl.addEventListener("click",()=>{
    ventanaMenuEl.style.display = "";
})
el.appendChild(headerEl)
}
