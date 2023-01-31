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
        document.getElementById("op1-6")!.addEventListener('click', convertirTricolor, false);
        document.getElementById("op1-7")!.addEventListener('click', correccionGamma , false);
        document.getElementById("op1-8")!.addEventListener('click', umbralizado, false);        
        document.getElementById("op1-9")!.addEventListener('click', umbral2limites, false);        
        document.getElementById("op1-10")!.addEventListener('click', desfaseX, false);        
        document.getElementById("op1-11")!.addEventListener('click', desfaseY, false);        
        document.getElementById("op1-12")!.addEventListener('click', desfaseD, false);             
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Edición ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op2-1")!.addEventListener('click',colorGradienteX, false);        
        document.getElementById("op2-2")!.addEventListener('click',colorGradienteY, false);        
        document.getElementById("op2-3")!.addEventListener('click',opchangeContraste, false);        
        document.getElementById("op2-4")!.addEventListener('click',changeBrightness, false);                        
        document.getElementById("op2-5")!.addEventListener('click', ecualizado, false);    
        document.getElementById("op2-6")!.addEventListener('click', opchangeFalsoColor, false);        
        document.getElementById("op2-7")!.addEventListener('click', cambioFtransferencia, false);                                          
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Matematicas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op3-1")!.addEventListener('click', opgetPow , false);                
        document.getElementById("op3-2")!.addEventListener('click',sqrt , false);  
                 /* Trigonometricas */
        document.getElementById("cos")!.addEventListener('click', coseno , false);        
        document.getElementById("sin")!.addEventListener('click', funcionSine , false);        
        document.getElementById("tan")!.addEventListener('click', tan , false);
        /* Aritmeticas */
        document.getElementById("sum")!.addEventListener('click', add , false);
        document.getElementById("res")!.addEventListener('click', subtract , false);
        document.getElementById("mult")!.addEventListener('click', multiplicacion , false);
        document.getElementById("divi")!.addEventListener('click', div , false);        
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones imagenes ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("SumaIguales")!.addEventListener("change", sumaImg , false);
        document.getElementById("SumaReesc")!.addEventListener('change', reescala , false);
        document.getElementById("op4-4")!.addEventListener('click', marcaAguaArray , false);
        document.getElementById("op4-5")!.addEventListener('click', marcaAguaCentro , false);        
         /*[0][0][0][0][0][0][0][0][0] -------- Opciones Nuevas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
         document.getElementById("op5-1")!.addEventListener('click', rain , false);        
         document.getElementById("op5-2")!.addEventListener('click', rain2 , false);   
                /*[0][0][0][0][0][0][0][0][0] -------- Opciones Morofologicas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op7-1")!.addEventListener('click', dilatarImg , false);        
        document.getElementById("op7-2")!.addEventListener('click', erosionarImg , false); 
        document.getElementById("op7-3")!.addEventListener('click', aperturaImg , false);
        document.getElementById("op7-4")!.addEventListener('click', cierreImg , false);
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Sintéticas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op8-1")!.addEventListener('click', generarPulso , false);
        document.getElementById("op8-2")!.addEventListener('click', generarRuido , false);
        document.getElementById("op8-3")!.addEventListener('click', generarRampaX , false);
        document.getElementById("op8-4")!.addEventListener('click', generarRampaY , false);                    
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Geometricas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
        document.getElementById("op9-1")!.addEventListener('click', escalarImagen2, false);
        document.getElementById("op9-2")!.addEventListener('click', rotarImagen2 , false);
        document.getElementById("op9-3")!.addEventListener('click', shearingX , false);
        document.getElementById("op9-4")!.addEventListener('click', shearingY , false);        
        /*[0][0][0][0][0][0][0][0][0] -------- Opciones Histograma ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/                
        document.getElementById("histogramas")!.addEventListener('click', histogramas , false);
        }
    },false);
    if (fi) {
        reader.readAsDataURL(fi);
  }

}
function cambiosInputValor(e:any,id:string){
    var input=document.getElementById(id)! as HTMLInputElement        
    input.value=e.currentTarget.value
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
function convertirTricolor(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.toTricolor(imagenSal));
  
}
function correccionGamma(evt: any): void{    
  document.getElementsByClassName("range2")[0]!.addEventListener("change",(e:any)=>{
      gamma(e);
      cambiosInputValor(e,"ValorGamma1")
  })
  document.getElementsByClassName("range2")[1]!.addEventListener("change",(e:any)=>{
      gamma(e);        
      cambiosInputValor(e,"ValorGamma2")        
  })
  document.getElementsByClassName("range2")[2]!.addEventListener("change",(e:any)=>{
      gamma(e);
      cambiosInputValor(e,"ValorGamma3");
  })
}
function gamma(e:any){
  var u1=document.getElementsByClassName("range2")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("range2")[1]! as HTMLInputElement;
  var u3=document.getElementsByClassName("range2")[2]! as HTMLInputElement;
  var valor=[parseInt(u1.value),parseInt(u2.value),parseInt(u3.value)]    
  var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.correctionGamma(imagenSal, valor));
}
function umbralizado(evt: any): void {
  document.getElementById("inputUmbral1")?.addEventListener("change",(e:any)=>{
      var des=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorUmbral1")
      var valor=des
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.toUmbral(imagenSal, valor));
  })    
}
function umbral2limites(evt: any): void{  
  console.log(document.getElementById("ValorGamma2"))      
  document.getElementsByClassName("rangeUmblar2")[0]!.addEventListener("change",(e:any)=>{
      umbral2(e);
      cambiosInputValor(e,"ValorGamma2e1")        
  })
  document.getElementsByClassName("rangeUmblar2")[1]!.addEventListener("change",(e:any)=>{
      umbral2(e);        
      cambiosInputValor(e,"ValorGamma2e2")        
  })
}

function umbral2(e:any){    
  var u1=document.getElementsByClassName("rangeUmblar2")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("rangeUmblar2")[1]! as HTMLInputElement;
  var valor=[parseInt(u1.value),parseInt(u2.value)]    
  console.log(valor)
  var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
  imagenSal.imageArray2DtoData(ctx, MathImg.toUmbral2limites(imagenSal, valor));
}
function desfaseX(evt: any): void{        
  document.getElementById("inputDesX")?.addEventListener("change",(e:any)=>{
      var des=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValDesX")
      var valor=des
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
      imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toDesfaceX(imagenSal, valor));
  })
}
function desfaseY(evt: any): void{        
  document.getElementById("inputDesY")?.addEventListener("change",(e:any)=>{
      var des=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValDesY")
      var valor=des
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
      imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toDesfaceY(imagenSal, valor));
  })
}
function desfaseD(evt: any): void{        
  document.getElementsByClassName("inputDesD")[0]!.addEventListener("change",(e:any)=>{
      DesfDiag(e)
      cambiosInputValor(e,"ValDesD1")
  })
  document.getElementsByClassName("inputDesD")[1]!.addEventListener('change',(e:any)=>{
      DesfDiag(e)
      cambiosInputValor(e,"ValDesD2")
  })
}
function DesfDiag(e:any){
  var u1=document.getElementsByClassName("inputDesD")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("inputDesD")[1]! as HTMLInputElement;
  var rangos=[parseInt(u1.value),parseInt(u2.value)]    
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.toDesfaceD(imagenSal, rangos[0], rangos[1]));
}

/*[0][0][0][0][0][0][0][0][0] -------- Opciones Edición ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function colorGradienteX(evt: any): void{    
  document.getElementsByClassName("inputGradX")[0]!.addEventListener("change",(e:any)=>{
      GradX(e);
      cambiosInputValor(e,"ValorGradX1")
  })
  document.getElementsByClassName("inputGradX")[1]!.addEventListener("change",(e:any)=>{
      GradX(e);        
      cambiosInputValor(e,"ValorGradX2")        
  })
  document.getElementsByClassName("inputGradX")[2]!.addEventListener("change",(e:any)=>{
      GradX(e);
      cambiosInputValor(e,"ValorGradX3");
  })

  document.getElementsByClassName("inputGradX")[3]!.addEventListener("change",(e:any)=>{
      GradX(e);
      cambiosInputValor(e,"ValorGradX4")
  })
  document.getElementsByClassName("inputGradX")[4]!.addEventListener("change",(e:any)=>{
      GradX(e);        
      cambiosInputValor(e,"ValorGradX5")        
  })
  document.getElementsByClassName("inputGradX")[5]!.addEventListener("change",(e:any)=>{
      GradX(e);
      cambiosInputValor(e,"ValorGradX6");
  })
}
function GradX(e:any){
  var u1=document.getElementsByClassName("inputGradX")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("inputGradX")[1]! as HTMLInputElement;
  var u3=document.getElementsByClassName("inputGradX")[2]! as HTMLInputElement;
  var u4=document.getElementsByClassName("inputGradX")[3]! as HTMLInputElement;
  var u5=document.getElementsByClassName("inputGradX")[4]! as HTMLInputElement;
  var u6=document.getElementsByClassName("inputGradX")[5]! as HTMLInputElement;
  var valor=[parseInt(u1.value),parseInt(u2.value),parseInt(u3.value),parseInt(u4.value),parseInt(u5.value),parseInt(u6.value)]    
  var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.colorGradienteX(imagenSal, valor));
}

function colorGradienteY(evt: any): void{    
  document.getElementsByClassName("inputGradY")[0]!.addEventListener("change",(e:any)=>{
      GradY(e);
      cambiosInputValor(e,"ValorGradY1")
  })
  document.getElementsByClassName("inputGradY")[1]!.addEventListener("change",(e:any)=>{
      GradY(e);        
      cambiosInputValor(e,"ValorGradY2")        
  })
  document.getElementsByClassName("inputGradY")[2]!.addEventListener("change",(e:any)=>{
      GradY(e);
      cambiosInputValor(e,"ValorGradY3");
  })

  document.getElementsByClassName("inputGradY")[3]!.addEventListener("change",(e:any)=>{
      GradY(e);
      cambiosInputValor(e,"ValorGradY4")
  })
  document.getElementsByClassName("inputGradY")[4]!.addEventListener("change",(e:any)=>{
      GradY(e);        
      cambiosInputValor(e,"ValorGradY5")        
  })
  document.getElementsByClassName("inputGradY")[5]!.addEventListener("change",(e:any)=>{
      GradY(e);
      cambiosInputValor(e,"ValorGradY6");
  })
}
function GradY(e:any){
  var u1=document.getElementsByClassName("inputGradY")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("inputGradY")[1]! as HTMLInputElement;
  var u3=document.getElementsByClassName("inputGradY")[2]! as HTMLInputElement;
  var u4=document.getElementsByClassName("inputGradY")[3]! as HTMLInputElement;
  var u5=document.getElementsByClassName("inputGradY")[4]! as HTMLInputElement;
  var u6=document.getElementsByClassName("inputGradY")[5]! as HTMLInputElement;
  var valor=[parseInt(u1.value),parseInt(u2.value),parseInt(u3.value),parseInt(u4.value),parseInt(u5.value),parseInt(u6.value)]    
  var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.colorGradientY(imagenSal, valor));
}


function opchangeContraste(evt: any): void {
  document.getElementById("inputContraste")?.addEventListener("change",(e:any)=>{
      var n:number=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorContraste")
      var valor=n
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.changeContraste(imagenSal, valor));
  })
}
function cambioFtransferencia(evt: any): void {
  document.getElementsByClassName("inputTrans")[0].addEventListener("change",(e:any)=>{
      cambiosInputValor(e,"ValorFTrans1")
      fTransferencia(e)
  })
  document.getElementsByClassName("inputTrans")[1].addEventListener("change",(e:any)=>{
      cambiosInputValor(e,"ValorFTrans2")
      fTransferencia(e)
  })
  document.getElementsByClassName("inputTrans")[2].addEventListener("change",(e:any)=>{
      cambiosInputValor(e,"ValorFTrans3")
      fTransferencia(e)
  })
  document.getElementsByClassName("inputTrans")[3].addEventListener("change",(e:any)=>{
      cambiosInputValor(e,"ValorFTrans4")
      fTransferencia(e)
  })    
}
function fTransferencia(e:any){
  var u1=document.getElementsByClassName("inputTrans")[0]! as HTMLInputElement;
  var u2=document.getElementsByClassName("inputTrans")[1]! as HTMLInputElement;
  var u3=document.getElementsByClassName("inputTrans")[2]! as HTMLInputElement;
  var u4=document.getElementsByClassName("inputTrans")[3]! as HTMLInputElement;
  var factores=[parseInt(u1.value),parseInt(u2.value),parseInt(u3.value),parseInt(u4.value)] 
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.cambioFTransferencia(imagenSal, factores));
}
function changeBrightness(evt: any): void {    
  document.getElementById("inputBrillo")?.addEventListener("change",(e:any)=>{
      var n:number=parseFloat(e.currentTarget.value) 
      cambiosInputValor(e,"ValorBrillo")
      var valor=n
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.changeBrightness(imagenSal, valor));
  })    
}
function ecualizado(evt: any): void{
    var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoData(ctx, MathImg.ecualizar(imagenSal));
} 
function opchangeFalsoColor(evt: any): void {
  document.getElementById("inputFC")?.addEventListener("change",(e:any)=>{
      var n:number=parseFloat(e.currentTarget.value) 
      cambiosInputValor(e,"ValorFC")        
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.fromHSItoRGB(MathImg.falseColorByHue(MathImg.fromRGBtoHSI(imagenSal),n, 210)));
  })
}
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Matemáticas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function opgetPow(evt: any): void{
  var potencia:number=1
  document.getElementById("inputPotencia")?.addEventListener("change",(e:any)=>{
      potencia=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorPotencia")
      var valor=potencia
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());        
      imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.pow(imagenSal, valor));
  })
}
function sqrt(evt: any): void{
    var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toSqrt(imagenSal));
}
/* Trigonometricas */
function coseno(evt: any): void{
  var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toCos(imagenSal));
}
function funcionSine(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toSine(imagenSal));
}
function tan(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.toTan(imagenSal));
} 
/* Aritmeticas */
function add(evt: any): void{    
  document.getElementById("inputSuma")?.addEventListener("change",(e:any)=>{
      var valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorSuma")
      var sumar = valor;
      console.log(typeof valor)
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.toAdd(imagenSal, sumar));        
  })        
}
function subtract(evt: any): void{    
  var valor:number=0
  document.getElementById("inputResta")?.addEventListener("change",(e:any)=>{
      valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorResta")
      var restar = valor;        
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.toSubtract(imagenSal, restar));        
  })    
} 
function multiplicacion(evt: any): void{        
  document.getElementById("inputMult")?.addEventListener("change",(e:any)=>{
      var valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorMult")
      var mult = valor;        
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.toMultiplication(imagenSal, mult));
  })
  
}
function div(evt: any): void{  
  var valor:number=0
  document.getElementById("inputDiv")?.addEventListener("change",(e:any)=>{
      valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorDiv")
      var mult = valor;        
      var imagenSal:ImageType=new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.toDividir(imagenSal, mult));        
  })       
}
/* Iamgenes compuestas */
function sumaImg(evt: any): void {
  let img = new Image()
  const file = document.getElementById("SumaIguales") as HTMLInputElement | null;
  let fi = file?.files![0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
        img.src = reader.result as string;
        img.onload = () => {            
          ctxFic.drawImage(img,0,0)                                                       
          var imagen2: ImageType = new ImageType(ctxFic, img);        
          var imagenSal: ImageType = new ImageType(ctx, imgLocal.getImage());
          imagenSal.imageArray2DtoData(ctx, MathImg.addImg(imagenSal, imagen2));                            
        }
  }, false);

  if (fi) {
        reader.readAsDataURL(fi);
  }        
}
function reescala(evt:any):void{
  let img = new Image()
  const file = document.getElementById("SumaReesc") as HTMLInputElement | null;
  let fi = file?.files![0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
        img.src = reader.result as string;
        img.onload = () => {            
          ctxFic.drawImage(img,0,0,canvas.width,canvas.height)  
          var imagen2: ImageType = new ImageType(ctxFic, img);        
          var imagenSal: ImageType = new ImageType(ctx, imgLocal.getImage());
          imagenSal.imageArray2DtoData(ctx, MathImg.addImg(imagenSal, imagen2));                          
        }
  }, false);

  if (fi) {
        reader.readAsDataURL(fi);
  } 
}
  
function marcaAguaCentro(evt: any): void {
  document.getElementById("MACentroInput")?.addEventListener("change",()=>{
      marcaCentro()
      
  })    
}
function marcaCentro(){
  var opacidad:number=1
  var barra=document.getElementById("inputPorcentaje") as HTMLInputElement
  barra.addEventListener('change',(e)=>{        
      opacidad=parseFloat(barra.value) 
      cambiosInputValor(e,"ValorInputMAcentro")
      let canvas4 = <HTMLCanvasElement>document.createElement('canvas');
      let ctx4 = canvas4.getContext("2d",{ willReadFrequently: true })!;        
      canvas4.width=canvas.width
      canvas4.height=canvas.height
      let img = new Image()
      const file = document.getElementById("MACentroInput") as HTMLInputElement | null;
      let fi = file?.files![0];
      const reader = new FileReader();            
      reader.addEventListener("load", function () {
          img.src = reader.result as string;
          img.onload = () => {                                
              ctx4.drawImage(img,(canvas.width/2)-(img.width/2),(canvas.height/2)-(img.height/2))                
              var imagen2: ImageType = new ImageType(ctx4, img);    
              var imagenSal: ImageType = new ImageType(ctxO, image);                
              imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.marcaAguaCentro(imagen2,imagenSal,opacidad));
            } 
      }, false);
      if (fi) {
            reader.readAsDataURL(fi);
      }
  })
}  
function marcaAguaArray(evt: any): void {
  document.getElementById("MAarrayInputfile")?.addEventListener("change",()=>{
      marcaArray()
  })    
}
function marcaArray(){
  var opacidad:number=1
  var barra=document.getElementById("inputMAarray") as HTMLInputElement
  barra.addEventListener('change',(e)=>{
      opacidad=parseFloat(barra.value) 
      cambiosInputValor(e,"ValorMAarray")
      let canvas4 = <HTMLCanvasElement>document.createElement('canvas');
      let ctx4 = canvas4.getContext("2d",{ willReadFrequently: true })!;        
      canvas4.width=canvas.width
      canvas4.height=canvas.height
      let img = new Image()
      const file = document.getElementById("MAarrayInputfile") as HTMLInputElement | null;
      let fi = file?.files![0];
      const reader = new FileReader();            
      reader.addEventListener("load", function () {
          img.src = reader.result as string;
          img.onload = () => {                                
              ctx4.drawImage(img,0,0)                
              var imagen2: ImageType = new ImageType(ctx4, img);
              imagen2._height=img.height;
              imagen2._width=img.width;
              var imagenSal: ImageType = new ImageType(ctxO, imgLocal.getImage());
              imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.marcaAguaArray(imagenSal,imagen2,opacidad));                
              console.log("marca de agua array")
            } 
      }, false);
      if (fi) {
            reader.readAsDataURL(fi);
      }
  })
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
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Morfológicas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function dilatarImg(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.dilatar(imagenSal, true));
} 
function erosionarImg(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.erosionar(imagenSal, true));
}

function aperturaImg(evt: any): void{
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.apertura(imagenSal, true));
}
function cierreImg(evt: any): void{
  console.log("cierre")
  var imagenSal:ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.cierre(imagenSal, true));
}
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Sintéticas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function generarPulso(evt: any): void{
  var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
  //imagenSal.imageArray2DtoData(ctx, MathImg.pulso(imgLocal.getImage().width, imgLocal.getImage().height));
  imagenSal.imageArray2DtoData(ctx, MathImg.pulso(imagenSal));
}
function generarRuido(evt: any): void{
  var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoData(ctx, MathImg.ruido(imagenSal.getWidth(), imagenSal.getHeight()));    
}
function generarRampaX(evt: any): void{
  var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.rampaX(imagenSal.getWidth(), imagenSal.getHeight()));
}
function generarRampaY(evt: any): void{
  var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
  imagenSal.imageArray2DtoDataWithResizing(ctx, MathImg.rampaY(imagenSal.getWidth(), imagenSal.getHeight()));
}
/*[0][0][0][0][0][0][0][0][0] -------- Opciones Geometricas ------[0][0][0][0][0][0][0][0][0][0][0][0][0]*/
function escalarImagen(evt: any): void{
  document.getElementById("inputEsc")?.addEventListener("change",(e:any)=>{
      var valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorEsc")
      var factor = valor;
      //var imagenSal: ImageType = new ImageType(ctxFic, undefined, Math.floor(imgLocal.getImage().width*factor), Math.floor(imgLocal.getImage().height*factor));
      var imagenSal: ImageType = new ImageType(ctxFic, undefined, Math.floor(image.width*factor), Math.floor(image.height*factor));
      imagenSal.imageArray2DtoData(ctx, MathImg.escalar(imagenSal, factor));
  })    
}
function escalarImagen2(evt: any): void{    
  document.getElementById("inputEsc")?.addEventListener("change",(e:any)=>{
      var valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorEsc")
      var factor = valor; 
      //ctx.drawImage(imgLocal.getImage(), 0,0, Math.floor(imgLocal.getImage().width*factor), Math.floor(imgLocal.getImage().height*factor));
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.drawImage(image,0,0, Math.floor(image.width*factor), Math.floor(image.height*factor));
  })    
}
function rotarImagen(evt: any): void{
  document.getElementById("inputRotar")?.addEventListener("change",(e:any)=>{
      var valor=parseInt(e.currentTarget.value) 
      cambiosInputValor(e,"ValorRotar")
      var angulo = valor;        
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.rotar(imagenSal, angulo));        
  })    
}
function rotarImagen2(evt: any): void{
  document.getElementById("inputRotar")?.addEventListener("change",(e:any)=>{
      ctx.clearRect(0,0,image.width,image.height)
      var imgdata = ctxO.getImageData(0,0,NumnewCanWidth,NumnewCanHeight)
      console.log("WWWWWWWW",imgdata)
      var valor = 0
      valor=parseInt(e.currentTarget.value) 
      console.log("ESCUCHAAAAAAA",valor)
/*         var value=document.getElementById("ValorRotar")! as HTMLInputElement
      value.value=e.currentTarget.value */
      cambiosInputValor(e,"ValorRotar")
      var angulo = valor;        
      
      ctx.translate(NumnewCanWidth/2, NumnewCanHeight/2);
      
      ctx.rotate(angulo* Math.PI / 180);
      
      ctx.translate(-NumnewCanWidth/2, -NumnewCanHeight/2);
      ctx.clearRect(0,0,NumnewCanWidth,NumnewCanHeight)
      console.log("VERIFICANDO TAMAÑO REAL")
      ctx.drawImage(image,0,0,NumnewCanWidth,NumnewCanHeight);
  })      
 }
function shearingX(evt: any): void{
  document.getElementById("inputShearingX")?.addEventListener("change",(e:any)=>{
      var valor=parseFloat(e.currentTarget.value) 
      cambiosInputValor(e,"ValorShearingX")
      var factor = valor;        
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.shearingX(imagenSal, factor));
  }) 

}
function shearingY(evt: any): void{
  document.getElementById("inputShearingY")?.addEventListener("change",(e:any)=>{
      var valor=parseFloat(e.currentTarget.value) 
      cambiosInputValor(e,"ValorShearingY")
      var factor = valor;        
      var imagenSal: ImageType = new ImageType(ctxFic, imgLocal.getImage());
      imagenSal.imageArray2DtoData(ctx, MathImg.shearingY(imagenSal, factor));        
      console.log(e.currentTarget.value)
  }) 

}
function histogramas(evt: any): void {
  var lienzo2 = <HTMLCanvasElement>document.getElementById("histograma1");
  const pantalla2 = lienzo2.getContext("2d")!;
  var lienzo4 = <HTMLCanvasElement>document.getElementById("histograma2");
  const pantalla4 = lienzo4.getContext("2d")!;
  const imagenSal: ImageType = new ImageType(ctx, imgLocal.getImage());
  let canvas1: HTMLCanvasElement = lienzo2;
  let graphics1: CanvasRenderingContext2D = pantalla2;
  let canvas2: HTMLCanvasElement = lienzo4;
  let graphics2: CanvasRenderingContext2D = pantalla4;
  graphics1.clearRect(0,0,canvas1.width,canvas1.height)
  graphics2.clearRect(0,0,canvas2.width,canvas2.height)

  let hist = MathImg.hist(imagenSal);    
  const miCanvas1: CanvasLocal = new CanvasLocal(graphics1, canvas1, hist);
  miCanvas1.paint();
  let histAc = MathImg.histAcum(hist);
  const miCanvas2: CanvasLocal = new CanvasLocal(graphics2, canvas2, histAc);
  miCanvas2.paint();      
}
