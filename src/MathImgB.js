"use strict";
exports.__esModule = true;
exports.MathImgB = void 0;
var MathImgB = /** @class */ (function () {
    function MathImgB() {
    }
    MathImgB.initArray = function (width, height) {
        var arrImage = new Array(3);
        arrImage[0] = new Array(height);
        arrImage[1] = new Array(height);
        arrImage[2] = new Array(height);
        for (var i = 0; i < height; i++) {
            arrImage[0][i] = new Array(width);
            arrImage[1][i] = new Array(width);
            arrImage[2][i] = new Array(width);
        }
        console.log(arrImage);
        console.log(width, height);
        return arrImage;
    };
    MathImgB.initArray2D = function (width, height) {
        var arrImage = new Array(2);
        arrImage[0] = new Array(height);
        arrImage[1] = new Array(height);
        for (var i = 0; i < height; i++) {
            arrImage[0][i] = new Array(width);
            arrImage[1][i] = new Array(width);
        }
        return arrImage;
    };
    MathImgB.toTricolor = function (img) {
        //variable que guarda el arreglo 3d de la imagen de color
        var arrImage = img.getArrayImg();
        //variable donde guardamos la salida
        var sal = this.initArray(img.getWidth(), img.getHeight());
        var inicio = 0, termino = img.getWidth() / 3;
        console.log(inicio, termino);
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = inicio; j < termino; j++) {
                sal[0][i][j] = 0;
                sal[1][i][j] = arrImage[1][i][j];
                sal[2][i][j] = 0;
            }
        }
        inicio = termino;
        termino = 2 * img.getWidth() / 3;
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = inicio; j < termino; j++) {
                sal[0][i][j] = arrImage[0][i][j];
                sal[1][i][j] = arrImage[1][i][j];
                sal[2][i][j] = arrImage[2][i][j];
            }
        }
        inicio = termino;
        termino = img.getWidth();
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = inicio; j < termino; j++) {
                sal[0][i][j] = arrImage[0][i][j];
                sal[1][i][j] = 0;
                sal[2][i][j] = 0;
            }
        }
        return sal;
    };
    return MathImgB;
}());
exports.MathImgB = MathImgB;
