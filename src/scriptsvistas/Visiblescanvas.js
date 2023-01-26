document.getElementById("histogramas").addEventListener("click",his2);
function his2(){
   
    document.getElementById("histogramas").classList.add("active")
    
    document.getElementById("canvaH").classList.add("active")
    document.getElementById("canvac").classList.add("inactive")
}
document.getElementById("BtnH").addEventListener("click",hisClose);
function hisClose(){
    document.getElementById("canvaH").classList.remove("active")
    document.getElementById("canvac").classList.remove("inactive")
    document.getElementById("histogramas").classList.remove("active")
}


document.getElementById("histogramas").addEventListener("mousemove",()=>{

    document.getElementById("Ax").classList.add('active')
})
document.getElementById("histogramas").addEventListener("mouseout",()=>{

    document.getElementById("Ax").classList.remove('active')
})
/* CODIGO NUEVO AGREGADO*/
document.getElementById("Original").addEventListener("click",()=>{
    document.getElementById("Original").classList.add('active')
    document.getElementById("pcultar").classList.remove('active')
    document.getElementById("imgOrigin").classList.remove('active')
    document.getElementById("img1").classList.add('active')
})
document.getElementById("pcultar").addEventListener("click",()=>{
    document.getElementById("Original").classList.remove('active')
    document.getElementById("pcultar").classList.add('active')
    document.getElementById("imgOrigin").classList.add('active')
    document.getElementById("img1").classList.remove('active')
})
document.getElementById("Original").addEventListener("mousemove",()=>{
    document.getElementById("Origin").classList.add('active')
   
})
document.getElementById("pcultar").addEventListener("mousemove",()=>{
    document.getElementById("segar").classList.add('active')
    
})

document.getElementById("Original").addEventListener("mouseout",()=>{
    document.getElementById("Origin").classList.remove('active')
   
})
document.getElementById("pcultar").addEventListener("mouseout",()=>{
    document.getElementById("segar").classList.remove('active')
    
})
