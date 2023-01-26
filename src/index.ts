import { ImageLocal } from "./ImageLocal";
import { ImageType } from "./ImageType";
import { Sepia } from "./ImagenLocal";
import { Particle } from "./particle";
import { ParticleText } from "./particle";
import { CanvasLocal } from "./canvasLocal";
import { create } from "domain";


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
        
        }
    },false);
    if (fi) {
        reader.readAsDataURL(fi);
  }

  /*[0][0][0][0][0][0][0][0][0] --------Opciones basicas------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
  document.getElementById("op1-1")!.addEventListener('click', convertirAGris, false);        
  document.getElementById("op1-2")!.addEventListener('click', convertirANegativo, false);        
  document.getElementById("op1-13")!.addEventListener('click', convertirANegativoGrises, false);
  document.getElementById("op1-3")!.addEventListener('click', convertirARojo, false);
  document.getElementById("op1-4")!.addEventListener('click', convertirAVerde, false);        
  document.getElementById("op1-5")!.addEventListener('click', convertirAAzul, false);
  document.getElementById("op1-6")!.addEventListener('click', convertirTricolor, false);
  document.getElementById("op1-7")!.addEventListener('click', correccionGamma , false);
  document.getElementById("op1-8")!.addEventListener('click', umbralizado, false);        
  document.getElementById("op1-9")!.addEventListener('click', umbral2limites, false);        
  document.getElementById("op1-10")!.addEventListener('click', desfaseX, false);        
  document.getElementById("op1-11")!.addEventListener('click', desfaseY, false);        
  document.getElementById("op1-12")!.addEventListener('click', desfaseD, false); 
}
