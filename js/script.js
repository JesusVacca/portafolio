const hamburguesa = document.getElementById("hamburguesa");

hamburguesa.onclick =()=>{
    hamburguesa.classList.toggle("close");
    document.getElementById("header-menu").classList.toggle("open");
}