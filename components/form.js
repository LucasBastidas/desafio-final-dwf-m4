function formComponent(el){
    const formEl = document.createElement("div")
    formEl.innerHTML = `
    <form class="form">
    <h2 class="form__title">Escribime</h2>
    <div class="form__label-cont">
        <label for="">
            <h3 class="form__label">Nombre</h3>
            <input type="text" name="nombre" class="form__input">
        </label>
        <label for="">
        <h3 class="form__label">Email</h3>
        <input type="email" name="email" class="form__input">
        </label>
        <label for="">
            <h3 class="form__label">Mensaje</h3>
            <textarea name="mensaje" id="" class="form__textarea"></textarea>
        </label>
        <div class="form__submit-cont">
            <button class="form__submit-button">Enviar</button>
        </div>
    </div>
</form>
    `
    el.appendChild(formEl)
    sendForm(formEl)
    
}
function sendForm(form){
    form.addEventListener("submit",(e)=>{
        e.preventDefault();

    const formData = new FormData(e.target)
    const objeto = Object.fromEntries(formData.entries())
    const mensaje = "Nombre: "+ objeto.nombre + "\n" +"Email: " + objeto.email +"\n" +"Mensaje: " + objeto.mensaje;
    
    fetch("https://apx-api.vercel.app/api/utils/dwf",{

        method: "POST",
        headers: { "content-type": "application/json" },
        body:{
            to:"lucaasbastidas@gmail.com",
            message: mensaje,
        }
    }).then(()=>{
        alert(
            "El mensaje fue enviado! Gracias por comunicarte "+ objeto.nombre
        )
    })
    })
}