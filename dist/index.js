"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = /** @class */ (function () {
    function Promise() {
    }
    Promise.resolved = function (value) { };
    Promise.rejected = function (reason) { };
    Promise.defered = function () { };
    return Promise;
}());
exports.default = Promise;
