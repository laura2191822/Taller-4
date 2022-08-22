const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const usuario = document.getElementById("user");
const contra = document.getElementById("pswr");
const confContra = document.getElementById("con_pswr");
const email = document.getElementById("email");
const form = document.getElementById("formulario");

form.addEventListener('submit', e=>{
    let regexpswr= new RegExp (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#,%,/,&])([A-Za-z\d$@$!%*?&]|[^ ]){15,20}$/);
    let regexuser= new RegExp(/^[A-Za-z0-9\s]+$/g);
    e.preventDefault();
    if(!nombre.value){
        alert('El campo "Nombre" es obligatorio');
    }
    if(!apellido.value){
        alert('El campo "Apellido" es obligatorio');
    }
    if(!email.value){
        alert('El campo "Correo" es obligatorio');
    }
    if(nombre.value.length > 25){
        alert('El campo "Nombre" excede el límite de 25 caracteres');
    }
    if(apellido.value.length > 25){
        alert('El campo "Apellido" excede el límite de 25 caracteres');
    }
    if((direccion.value.startsWith('Cll') || direccion.value.startsWith('Cra') || direccion.value.startsWith('Av') || direccion.value.startsWith('Anv') || direccion.value.startsWith('Trans')) === false){
        alert('La dirección debe comenzar con Cll, Cra, Av, Anv o Trans');
    }
    if(usuario.value.length > 20 || usuario.value.length <10 || !regexuser.test(usuario.value)){
        alert('El campo "Usuario" debe tener entre 10 y 20 caracteres, no debe contener caracteres extraños');
    }
    if(!regexpswr.test(contra.value)){
        alert('La contraseña no es válida, debe contener máximo 20 y mínimo 15 caracteres. Debe contener mayúsculas, números, letras y/o los siguientes caracteres [#,%,/,&]');
    }
    if(confContra.value != contra.value){
        alert('La confirmación de la contraseña no coincide con la contraseña ingresada en el campo anterior');
    }
    if(email.value.length > 120){
        alert('El campo "Correo" excede el límite de 25 caracteres');
    }
})

function mostrar() {
    document.getElementById("mostrargustos").style.display = "block"; 
}

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});