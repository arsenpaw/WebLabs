"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrinterModel = /** @class */ (function () {
    function PrinterModel(name, pagePerMinute, imgUrl, cost) {
        this.name = name;
        this.pagePerMinute = pagePerMinute;
        this.imgUrl = imgUrl;
        this.cost = cost;
    }
    return PrinterModel;
}());
exports.default = PrinterModel;
