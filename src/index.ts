import { ImageLocal } from "./ImageLocal";
import { ImageType } from "./ImageType";
import { Particle } from "./particle";
import { ParticleText } from "./particle";
import { CanvasLocal } from "./canvasLocal";



export var canvas = <HTMLCanvasElement>document.getElementById("img1");
var canvasR = <HTMLCanvasElement>document.getElementById("Result");
var canvasO = <HTMLCanvasElement>document.getElementById("imgOrigin");
const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
const ctx2 = canvasR.getContext("2d", { willReadFrequently: true })!;
const ctxO = canvasO.getContext("2d", { willReadFrequently: true })!;
var image=document.createElement("img");
let canvasFic = <HTMLCanvasElement>document.createElement('canvas');
let ctxFic = canvasFic.getContext("2d",{ willReadFrequently: true })!;
var imgLocal: ImageLocal = new ImageLocal(ctx);
console.log(document.getElementsByClassName("Bca apli"))
export var NumnewCanWidth:number = 0;
export var NumnewCanHeight:number = 0;
const eventOnchangesInput = <HTMLInputElement>document.getElementById("file");
const $BtnSave = <HTMLDivElement>document.getElementById("save-file");

 export const TamCanvasWidth:number =  979;
 export const TamCanvasHeight:number = 495;
 canvasFic.width = 979;
 canvasFic.height = 495;
 canvasO.width = 979;
canvasO.height = 495;
export const TamCanvasWidthFic:number = canvasFic.width = 979;
export const TamCanvasHeightFic:number = canvasFic.height = 495; 

eventOnchangesInput.addEventListener("change",image1Canvas);
function image1Canvas(){
    let image1 = new Image();    
    const file = document.querySelector('input[type=file]') as HTMLInputElement | null;
    let fi = file?.files![0];
    const reader = new FileReader();
    reader.addEventListener('load', function(){
        image1.src = reader.result as string;        
        image=image1;
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctxFic.clearRect(0,0,canvas.width,canvas.height)
        ctxO?.clearRect(0,0,canvasO.width,canvasO.height)
        image1.onload = () => {            
            var  ancho:number =image1.width;
            var alto:number =image1.height;            
            
        imageSave(image1,ancho,alto)        
        if(alto === ancho){
            if( ancho < TamCanvasWidth && alto < TamCanvasHeight){                
                var porcentajeY:number = (alto * 100)/ancho;
                var tamWidth:number = ancho;
                var tamHeight:number = alto;
                var posicionX:number = (TamCanvasWidth - tamWidth)/2;
                var posicionY:number =(TamCanvasHeight - tamHeight)/2;
                canvas.width = tamWidth;
                canvas.height = tamHeight;
                canvasO.width = tamWidth;
                canvasO.height = tamHeight;
                NumnewCanWidth = Number(tamWidth.toFixed(0))
                NumnewCanHeight = Number(tamHeight.toFixed(0))
                canvas.style.marginLeft = `${posicionX}px`
                canvas.style.marginTop = `${posicionY}px`
                canvasO.style.marginLeft = `${posicionX}px`
                canvasO.style.marginTop = `${posicionY}px`
                ctx?.drawImage(image1,0,0,tamWidth,tamHeight); 
                ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);                  
                ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight);   
                           
            }else{var posicionX:number = (TamCanvasWidth - (TamCanvasWidth/2.3))/2;
            var posicionY:number =(TamCanvasHeight - (TamCanvasWidth/2.3))/2;
            var tamWidth:number = TamCanvasWidth/2.3;
            var tamHeight:number = TamCanvasWidth/2.3;
            canvas.width = tamWidth;
            canvas.height = tamHeight;
            canvas.style.marginLeft = `${posicionX}px`
            canvas.style.marginTop = `${posicionY}px`
            canvasO.style.marginLeft = `${posicionX}px`
            canvasO.style.marginTop = `${posicionY}px`
            NumnewCanWidth = Number(tamWidth.toFixed(0))
            NumnewCanHeight = Number(tamHeight.toFixed(0))
            ctx?.drawImage(image1,0,0,tamWidth,tamHeight);  
            ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);           
            ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight);  } 
                       
        }else if( alto > ancho){
            console.log(`ENTRA EN Alto :${alto} > Ancho :${ancho}`)

            if( ancho < TamCanvasWidth && alto < TamCanvasHeight){                
                var porcentajeY:number = (alto * 100)/ancho;
                var tamWidth:number = ancho;
                var tamHeight:number = alto;
                var posicionX:number = (TamCanvasWidth - tamWidth)/2;
                var posicionY:number =(TamCanvasHeight - tamHeight)/2;
                canvas.width = tamWidth;
                canvas.height = tamHeight;
                canvasO.width = tamWidth;
                canvasO.height = tamHeight;
                NumnewCanWidth = Number(tamWidth.toFixed(0))
                NumnewCanHeight = Number(tamHeight.toFixed(0))
                canvas.style.marginLeft = `${posicionX}px`
                canvas.style.marginTop = `${posicionY}px`
                canvasO.style.marginLeft = `${posicionX}px`
                canvasO.style.marginTop = `${posicionY}px`
                ctx?.drawImage(image1,0,0,tamWidth,tamHeight); 
                ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);                  
                ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight);   
                           
            }else{
            var porcentajeX:number = (ancho * 100)/alto;
            var tamHeight:number = (TamCanvasHeight) - 50;
            var tamWidth:number = (tamHeight * porcentajeX)/100;
            var posicionX:number = (TamCanvasWidth - tamWidth)/2;
            var posicionY:number =(TamCanvasHeight - tamHeight)/2;
            canvas.width = tamWidth;
            canvas.height = tamHeight;
            canvasO.width = tamWidth;
            canvasO.height = tamHeight;
            NumnewCanWidth = Number(tamWidth.toFixed(0))
            NumnewCanHeight = Number(tamHeight.toFixed(0))
            canvas.style.marginLeft = `${posicionX}px`
            canvas.style.marginTop = `${posicionY}px`
            canvasO.style.marginLeft = `${posicionX}px`
            canvasO.style.marginTop = `${posicionY}px`
           
            ctx?.drawImage(image1,0,0,tamWidth,tamHeight);
            ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);   
            ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight); }
                       

        }else if( ancho > alto){
            //console.log(`ENTRA EN Ancho :${ancho} > Alto :${alto}`)
            if( ancho < TamCanvasWidth && alto < TamCanvasHeight){                
                var porcentajeY:number = (alto * 100)/ancho;
                var tamWidth:number = ancho;
                var tamHeight:number = alto;
                var posicionX:number = (TamCanvasWidth - tamWidth)/2;
                var posicionY:number =(TamCanvasHeight - tamHeight)/2;
                canvas.width = tamWidth;
                canvas.height = tamHeight;
                canvasO.width = tamWidth;
                canvasO.height = tamHeight;
                NumnewCanWidth = Number(tamWidth.toFixed(0))
                NumnewCanHeight = Number(tamHeight.toFixed(0))
                canvas.style.marginLeft = `${posicionX}px`
                canvas.style.marginTop = `${posicionY}px`
                canvasO.style.marginLeft = `${posicionX}px`
                canvasO.style.marginTop = `${posicionY}px`
                ctx?.drawImage(image1,0,0,tamWidth,tamHeight); 
                ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);                  
                ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight);   
                           
            }else{
            var porcentajeY:number = (alto * 100)/ancho;
            var tamWidth:number = (TamCanvasWidth) - 340;
            var tamHeight:number = (tamWidth * porcentajeY)/100;
            var posicionX:number = (TamCanvasWidth - tamWidth)/2;
            var posicionY:number =(TamCanvasHeight - tamHeight)/2;
            canvas.width = tamWidth;
            canvas.height = tamHeight;
            canvasO.width = tamWidth;
            canvasO.height = tamHeight;
            NumnewCanWidth = Number(tamWidth.toFixed(0))
            NumnewCanHeight = Number(tamHeight.toFixed(0))
            canvas.style.marginLeft = `${posicionX}px`
            canvas.style.marginTop = `${posicionY}px`
            canvasO.style.marginLeft = `${posicionX}px`
            canvasO.style.marginTop = `${posicionY}px`
            ctx?.drawImage(image1,0,0,tamWidth,tamHeight);
            ctxO?.drawImage(image1,0,0,tamWidth,tamHeight);   
            ctxFic?.drawImage(image1,0,0,tamWidth,tamHeight);
             
            }
        }  
        // canvas.addEventListener('mousemove', handleMouse);
        /*[0][0][0][0][0][0][0][0][0] --------Opciones basicas------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
               document.getElementById("op1-1")!.addEventListener('click', convertirAGris, false);        
        document.getElementById("op1-2")!.addEventListener('click', convertirANegativo, false);        
        document.getElementById("op1-13")!.addEventListener('click', convertirANegativoGrises, false);
        document.getElementById("op1-3")!.addEventListener('click', convertirARojo, false);
        document.getElementById("op1-4")!.addEventListener('click', convertirAVerde, false);        
        document.getElementById("op1-5")!.addEventListener('click', convertirAAzul, false);
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Edición ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op2-5")!.addEventListener('click', ecualizado, false);               
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Matematicas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op3-2")!.addEventListener('click',sqrt , false);  
         /*[0][0][0][0][0][0][0][0][0] -------- Opciones Nuevas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
         document.getElementById("op5-1")!.addEventListener('click', rain , false);        
         document.getElementById("op5-2")!.addEventListener('click', rain2 , false);   
        
        }
    },false);
    if (fi) {
        reader.readAsDataURL(fi);
  }

}
/*[0][0][0][0][0][0][0][0][0] --------Opciones basicas------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function convertirAGris(evt: any): void{
     var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());     
    imagenSal.imageArray2DtoData(ctx, MathImg.toGray(imagenSal));   
}
function convertirANegativo(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.toNegative(imagenSal));    
}
function convertirANegativoGrises(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.toNegativeGrises(imagenSal));
}
function convertirARojo(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.toRed(imagenSal));
}
function convertirAVerde(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.toGreen(imagenSal));
}
function convertirAAzul(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.toBlue(imagenSal));
}
function ecualizado(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.ecualizar(imagenSal));
} 
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Matemáticas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/

function sqrt(evt: any): void{
    var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toSqrt(imagenSal));
}
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Nuevas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
//variables adicionales para el efecto rain
//let ctx = ctx;
let w:number;
let h:number;
const numberOfParticles = 1000;
let particlesArray: Particle[];
particlesArray = new Array(0);
var imagenSal: ImageType;

function init() {
  //init
  var imagenSal: ImageType = new ImageType(ctxFic, image);
  let tmp = MathImg.relativeBrightness(imagenSal);
  w = imagenSal.getWidth();
  h = imagenSal.getHeight();
  for (let i = 0; i < numberOfParticles; i++){
    particlesArray.push(new Particle(w, h, ctx, tmp));
  }
}

function animate() {
  ctx.drawImage(image, 0, 0, w, h);
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

function animate2() {
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
    ctx.globalAlpha = particlesArray[i].getSpeed()*0.5;
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate2);
}

function rain(evt: any): void { 
  init();
  animate();
}

function rain2(evt: any): void { 
  init();
  animate2();
}
