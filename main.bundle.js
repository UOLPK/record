webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_brain_js_src_index__ = __webpack_require__("./node_modules/brain.js/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Gallium Ai';
        this.net = new __WEBPACK_IMPORTED_MODULE_1_brain_js_src_index__["a" /* default */].recurrent.LSTM();
        console.log(this.net);
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.train = function () {
        console.log("trainning started");
        this.starttime = performance.now() / 1000;
        this.net.train([
            { input: [0, 0], output: [0] },
            { input: [0, 1], output: [1] },
            { input: [1, 0], output: [1] },
            { input: [1, 1], output: [0] }
        ]);
        this.endtime = performance.now() / 1000;
        this.totaltime = (this.endtime - this.starttime);
        console.log("Call to doSomething took " + (this.endtime - this.starttime) + " seconds.");
        this.output = this.net.run([0, 0]);
        console.log("this is the output of or gate ai", this.output);
        this.output = this.net.run([0, 1]);
        console.log("this is the output of or gate ai", this.output);
        this.output = this.net.run([1, 0]);
        console.log("this is the output of or gate ai", this.output);
        this.output = this.net.run([1, 1]);
        console.log("this is the output of or gate ai", this.output);
        this.output = this.net.run([this.x, this.y]);
        console.log("this is the output of or gate ai", this.output);
    };
    AppComponent.prototype.save = function () {
        localStorage['trainngdataXOR'] = JSON.stringify(this.net.toJSON());
    };
    AppComponent.prototype.load = function () {
        this.net.fromJSON(JSON.parse(localStorage['trainngdataXOR']));
    };
    AppComponent.prototype.runai = function () {
        this.output = this.net.run([this.x, this.y]);
        console.log("this is the output of or gate ai", this.output);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__record_record_component__ = __webpack_require__("./src/app/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trans_trans_component__ = __webpack_require__("./src/app/trans/trans.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'record', component: __WEBPACK_IMPORTED_MODULE_6__record_record_component__["a" /* RecordComponent */] },
    { path: 'trans', component: __WEBPACK_IMPORTED_MODULE_7__trans_trans_component__["a" /* TransComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__record_record_component__["a" /* RecordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trans_trans_component__["a" /* TransComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    padding: 2rem 2rem;\n}\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    /* width: 50%; */\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-5 text-center\">\n        <br>\n        <br>\n        <img class=\"center\" src=\"../assets/images/branding-logo.png\" alt=\"\" srcset=\"\">\n        <br>\n        <small class=\"form-text text-muted\" style=\"color:#6b8e23\"> The University Of Lahore(UOL) Student Verification System(SVS)</small>\n        <small class=\"form-text text-danger\" >Development and Testing Phase Of SAP</small>\n        <br>\n        <!-- <small class=\"form-text\" style=\"color:#6b8e23\">Please Enter User Name(Registration No)and Password and Domain For Access The SIS</small > -->\n  \n        <form class=\"text-center\">\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Username</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Please Enter the Roll Number\">\n            </div>\n          </div>\n          <div class=\"form-group row \">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" name=\"pass\" [(ngModel)]=\"pass\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password Here\">\n            </div>\n          </div>\n          <small *ngIf=\"err\" class=\"form-text text-danger \">Username or Password Incorrect !!!</small>\n          <br>\n          <button type=\"submit\" (click)=\"login()\" class=\"btn btn-success\">Check</button>\n        </form>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NumberFormatStyle } from '@angular/common';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.err = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.username, this.pass);
        if (this.username === "bscs02123417" && this.pass === "rana92") {
            this.err = false;
            localStorage.login = true;
            this.router.navigate(['record']);
        }
        else {
            localStorage.login = false;
            this.err = true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/record/record.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">University Of Lahore Record Verification System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-info my-2 my-sm-0\" (click)=\"trans()\" type=\"submit\">Transcript</button>\n      &nbsp;\n      &nbsp;\n      &nbsp;\n      <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"logout()\" type=\"submit\">Logout</button>\n    </form>\n  </div>\n</nav>\n<br>\n<br>\n<br>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <h5>Genreal Info</h5>\n  </div>\n  <div class=\"row\">\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <th scope=\"row\">STATUS:</th>\n          <td>Migrated (account locked)</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">TRANSCRIPT NO: </th>\n          <td>F0019295 </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">REGISTRATION NO: </th>\n          <td>BSCS02123417 </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">NAME: </th>\n          <td>AHMED RANA </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">CNIC: </th>\n            <td>35201-8455140-3 </td>\n          </tr>\n        <tr>\n          <th scope=\"row\">FATHER'S NAME: </th>\n          <td>RANA MUHAMMAD SHAKIL </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">DATE OF ADMISSION: </th>\n          <td>SEPTEMBER 2012 </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SESSION: </th>\n          <td>FALL 2012 </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">PROGRAM: </th>\n          <td>BACHELOR OF COMPUTER SCIENCE </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">CGPA: </th>\n            <td>3 </td>\n          </tr>\n        <tr>\n          <th scope=\"row\">DEPARTMENT: </th>\n          <td>COMPUTER SCIENCE</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordComponent = /** @class */ (function () {
    function RecordComponent(router) {
        this.router = router;
    }
    RecordComponent.prototype.ngOnInit = function () {
        if (localStorage.login === 'false') {
            this.router.navigate(['login']);
        }
    };
    RecordComponent.prototype.logout = function () {
        localStorage.login = false;
        this.router.navigate(['login']);
    };
    RecordComponent.prototype.trans = function () {
        this.router.navigate(['trans']);
    };
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/record/record.component.html"),
            styles: [__webpack_require__("./src/app/record/record.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/trans/trans.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trans/trans.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">University Of Lahore Record Verification System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-info my-2 my-sm-0\" (click)=\"info()\" type=\"submit\">Info</button>\n      &nbsp; &nbsp; &nbsp;\n      <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"logout()\" type=\"submit\">Logout</button>\n    </form>\n  </div>\n</nav>\n<br>\n<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <h5>Transcript</h5>\n  </div>\n  <div class=\"row\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Code</th>\n          <th scope=\"col\">Subject </th>\n          <th scope=\"col\">Cr.Hrs</th>\n          <th scope=\"col\">Grades</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">SEMSTER FIRST</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1010</th>\n          <td>Introduction to Computing</td>\n          <td>4</td>\n          <td>B+</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1012</th>\n          <td>Programming Fundamental </td>\n          <td>4</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ENG1012</th>\n          <td>Functional English</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">MA1113</th>\n          <td>Calculus and Analytical Geometry </td>\n          <td>3</td>\n          <td>A-</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SS2223</th>\n          <td>Islamic and Pakistan Studies</td>\n          <td>3</td>\n          <td>B+</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td></td>\n          <td>SGPA 3.34 - Cr.Hrs 17</td>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SEMESTER TWO</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1101</th>\n          <td>Computer Programming</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ECE2122</th>\n          <td>Electromagnetism</td>\n          <td>3</td>\n          <td>A</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ENG2022</th>\n          <td>Technical and Report Writing </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">MA3334</th>\n          <td>Probability and Statistics </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SS2330</th>\n          <td>Principles of Management </td>\n          <td>3</td>\n          <td>C+</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td></td>\n          <td>SGPA 3.1 - Cr.Hrs 15</td>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SEMESTER THREE</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS2135</th>\n          <td>Object Oriented Programming</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ECE1215</th>\n          <td>Digital Logic and Design</td>\n          <td>3</td>\n          <td>B+</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ENG1025</th>\n          <td>Communication Skills </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">MA2114</th>\n          <td>Multivariable Calculus </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SS2332</th>\n          <td>Principle of Marketing</td>\n          <td>3</td>\n          <td>A</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td></td>\n          <td>SGPA 2.1 - Cr.Hrs 15</td>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SEMESTER FOUR</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1010</th>\n          <td>Introduction to Database Systems</td>\n          <td>4</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1012</th>\n          <td>Data Structures and Algorithms</td>\n          <td>3</td>\n          <td>D</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ENG1012</th>\n          <td>Computer Organization and Assembly Language</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">MA1113</th>\n          <td>Professional Practices</td>\n          <td>3</td>\n          <td>C</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SS2223</th>\n          <td>Differential Equations</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td></td>\n          <td>SGPA 2.43 - Cr.Hrs 16</td>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">SEMESTER FIVE</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS3435</th>\n          <td>Theory of Automata and Formal Languages</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS3534</th>\n          <td>Operating Systems</td>\n          <td>4</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS4347</th>\n          <td>Introduction to Software Engineering</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">ECE4353</th>\n          <td>Computer Communication and Networks</td>\n          <td>3</td>\n          <td>A</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">MA2320</th>\n          <td>Linear Algebra </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n            <th scope=\"row\"></th>\n            <td></td>\n            <td>SGPA 3.34 - Cr.Hrs 16</td>\n            <td></td>\n          </tr>\n        <tr>\n          <th scope=\"row\">SEMESTER SIX</th>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1010</th>\n          <td>Artificial Intelligence</td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">CS1012</th>\n          <td>Human Computer Interaction </td>\n          <td>3</td>\n          <td>B</td>\n        </tr>\n        <tr>\n            <th scope=\"row\"></th>\n            <td></td>\n            <td>SGPA 3 - Cr.Hrs 9</td>\n            <td></td>\n          </tr>\n        <tr>\n      </tbody>\n    </table>\n    <br>\n    <br>\n    <br>\n    <br>\n    <p>\n        TOTAL CRIDET HOURS EARNED = 88 <br>\n        TOTAL CRIDET HOURS ATTEMPTED = 110  <br>\n        COMMULATIVE GRAND POINT AVERAGE (CGPA) 3.09  <br>\n    </p>\n    <br>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/trans/trans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransComponent = /** @class */ (function () {
    function TransComponent(router) {
        this.router = router;
    }
    TransComponent.prototype.ngOnInit = function () {
        if (localStorage.login === 'false') {
            this.router.navigate(['login']);
        }
    };
    TransComponent.prototype.logout = function () {
        localStorage.login = false;
        this.router.navigate(['login']);
    };
    TransComponent.prototype.info = function () {
        this.router.navigate(['record']);
    };
    TransComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trans',
            template: __webpack_require__("./src/app/trans/trans.component.html"),
            styles: [__webpack_require__("./src/app/trans/trans.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TransComponent);
    return TransComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map