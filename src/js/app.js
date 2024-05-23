document.addEventListener('DOMContentLoaded',()=>{
    eventListeners();
    darkMode();
})

function darkMode(){
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    //console.log(prefiereDarkMode.matches);
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
    prefiereDarkMode.addEventListener('change',()=>{
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    })

    const botonDarkmode = document.querySelector('.dark-mode-boton');
    botonDarkmode.addEventListener('click', ()=>{
        document.body.classList.toggle('dark-mode');
    })
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive)
    //Muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    
    metodoContacto.forEach(input => input.addEventListener('click',mostrarMetodosContacto));
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    const slider = document.querySelector('.propiedades-slider');
    navegacion.classList.toggle('mostrar');
    slider.classList.toggle('mover');
}

function mostrarMetodosContacto(e){
    const contactoDiv = document.querySelector('#contacto');
    if(e.target.value==='telefono'){
        contactoDiv.innerHTML = 
        '<label for="telefono">Teléfono</label>'+
        '<input id="telefono" type="tel" placeholder="Tu Teléfono" name="contacto[telefono]">'+
        '<p>Ingrese la fecha y la hora para ser contactado</p>'+
        '<label for="fecha">Fecha</label>'+
        '<input type="date" id="fecha" name="contacto[fecha]">'+
        '<label for="hora">Hora</label>'+
        '<input type="time" id="hora" min="08:00" max="18:00" name="contacto[hora]">';
    }else{
        contactoDiv.innerHTML =
        '<label for="email">E-mail</label>'+
        '<input id="email" type="email" placeholder="Tu Email" name="contacto[email]" >';
    }
}