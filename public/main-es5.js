(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\n  <div>\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"brand\">Pet Store</h1>\n  </div>\n  <div *ngIf=\"!this.auth.loggedIn(); else navOptions\">\n    <a mat-icon-button [routerLink]=\"['/login']\">Login</a>\n  </div>\n  <ng-template #navOptions>\n    <div>\n      <a mat-icon-button routerLink=\"/products\">\n        <!-- TODO user uploaded pets and liked pets component -->\n        <mat-icon>home</mat-icon>\n      </a>\n      <a class=\"mat-body\">Hello, {{ userService.user.firstName }}</a>\n      <!-- <a mat-icon-button>\n        <mat-icon\n          [matBadge]=\"itemCount\"\n          [matBadgeHidden]=\"itemCount < 1\"\n          matBadgeColor=\"warn\"\n          matBadgeSize=\"small\"\n          matBadgePosition=\"below after\"\n        >\n          shopping_cart\n        </mat-icon>\n      </a> -->\n      <a mat-icon-button (click)=\"logout()\">\n        Logout\n      </a>\n    </div>\n  </ng-template>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav mode=\"over\" #sidenav>\n    <mat-nav-list>\n      <mat-list-item>\n        <mat-icon matListIcon>account_circle</mat-icon>\n        <p matLine>\n          {{ userService.user.firstName }} {{ userService.user.lastName }}\n        </p>\n      </mat-list-item>\n      <hr />\n      <mat-list-item\n        routerLink=\"/products\"\n        routerLinkActive=\"active bg-info\"\n        (click)=\"sidenav.toggle()\"\n      >\n        <mat-icon matListIcon>explore</mat-icon>\n        <p matLine>Explore</p>\n      </mat-list-item>\n      <mat-list-item\n        [routerLink]=\"['/create']\"\n        routerLinkActive=\"active bg-info\"\n        (click)=\"sidenav.toggle()\"\n      >\n        <mat-icon matListIcon>attach_money</mat-icon>\n        <p matLine>Sell</p>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"card mx-auto\">\n      <div class=\"card-body\">\n        <div class=\"h4\">{{ dog.breed }}</div>\n        <img src=\"{{ dog.image }}\" style=\"background-size: cover;\" />\n        <h4 class=\"m-2\">{{ dog.amount | currency: 'INR' }}</h4>\n        <div #paypal></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-product/create-product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-product/create-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"mt-3 mt-lg-5 col-12 col-lg-7 mx-auto\" #petForm=\"ngForm\">\n    <mat-card align=\"middle\" class=\"my-2\">\n      <mat-card-title>Enter Details</mat-card-title>\n\n      <mat-card-content>\n        <mat-form-field class=\"w-100\">\n          <input\n            matInput\n            name=\"breed\"\n            type=\"text\"\n            placeholder=\"Breed\"\n            [(ngModel)]=\"dogModel.breed\"\n            required\n          />\n        </mat-form-field>\n\n        <mat-radio-group\n          class=\"d-block\"\n          name=\"sex\"\n          [(ngModel)]=\"dogModel.sex\"\n          aria-label=\"Select sex\"\n        >\n          <mat-radio-button class=\"m-1\" value=\"male\">Male</mat-radio-button>\n          <mat-radio-button class=\"m-1\" value=\"female\">Female</mat-radio-button>\n        </mat-radio-group>\n\n        <mat-form-field>\n          <input\n            name=\"dob\"\n            matInput\n            [matDatepicker]=\"picker\"\n            placeholder=\"Date of Birth\"\n            [(ngModel)]=\"dogModel.dob\"\n            required\n          />\n          <mat-datepicker-toggle\n            matInput\n            matSuffix\n            [for]=\"picker\"\n          ></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <mat-progress-spinner\n          class=\"mx-auto\"\n          [hidden]=\"!fileSelected\"\n          mode=\"indeterminate\"\n          diameter=\"30\"\n        >\n        </mat-progress-spinner>\n        <div *ngIf=\"!imageUploaded; else showImage\" [hidden]=\"fileSelected\">\n          <button\n            class=\"bg-primary m-1\"\n            type=\"button\"\n            mat-raised-button\n            (click)=\"img.click()\"\n          >\n            <mat-icon class=\"text-white\">add_photo_alternate</mat-icon>\n          </button>\n          <h5 class=\"mat-body-2\">Upload Image</h5>\n        </div>\n\n        <ng-template #showImage>\n          <div>\n            <button\n              class=\"bg-success\"\n              mat-flat-button\n              type=\"button\"\n              (click)=\"img.click()\"\n            >\n              <mat-icon class=\"text-white\">done</mat-icon>\n            </button>\n\n            <h5 class=\"mat-body-2\">Uploaded!</h5>\n            <img src=\"{{ imageUrl }}\" class=\"img-thumbnail\" alt=\"image\" />\n          </div>\n        </ng-template>\n        <input\n          hidden\n          #img\n          type=\"file\"\n          accept=\"image/*\"\n          name=\"newImage\"\n          placeholder=\"Upload Image\"\n          (change)=\"onFileSelected($event)\"\n          required\n        />\n      </mat-card-content>\n      <hr />\n      <mat-card-title>Address</mat-card-title>\n      <mat-card-content>\n        <mat-form-field class=\"p-1 w-100\">\n          <input\n            matInput\n            name=\"street\"\n            placeholder=\"Street\"\n            [(ngModel)]=\"dogModel.street\"\n            required\n          />\n        </mat-form-field>\n        <mat-form-field class=\"p-1 w-50\">\n          <input\n            matInput\n            name=\"city\"\n            placeholder=\"City\"\n            [(ngModel)]=\"dogModel.city\"\n            required\n          />\n        </mat-form-field>\n        <mat-form-field class=\"p-1 w-50\">\n          <input\n            matInput\n            name=\"state\"\n            placeholder=\"State\"\n            [(ngModel)]=\"dogModel.state\"\n            required\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            matInput\n            name=\"pin\"\n            placeholder=\"Pin Code\"\n            [(ngModel)]=\"dogModel.pincode\"\n            required\n          />\n        </mat-form-field>\n      </mat-card-content>\n      <hr />\n      <mat-card-title>Set Price</mat-card-title>\n      <mat-card-content>\n        <mat-form-field appearance=\"outline\">\n          <span matPrefix class=\"mr-2\" style=\"font-size: 2rem;\">&#8377;</span>\n          <input\n            style=\"font-size: 24px;\"\n            matInput\n            name=\"amount\"\n            type=\"number\"\n            [(ngModel)]=\"dogModel.amount\"\n            required\n          />\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button\n          mat-raised-button\n          [disabled]=\"!petForm.valid\"\n          (click)=\"submit()\"\n        >\n          Submit\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\n  <div class=\"col col-lg-3 mx-auto\">\n    <mat-card>\n      <mat-card-title>Login</mat-card-title>\n      <mat-card-content>\n        <form>\n          <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input\n              matInput\n              type=\"email\"\n              [(ngModel)]=\"loginUserData.email\"\n              name=\"email\"\n              required\n            />\n          </mat-form-field>\n        </form>\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            type=\"password\"\n            [(ngModel)]=\"loginUserData.password\"\n            name=\"password\"\n            required\n          />\n        </mat-form-field>\n        <div [hidden]=\"!showError\">\n          <p class=\"alert alert-danger\">Login failed, try again!</p>\n        </div>\n        <a routerLink=\"/register\">New user? Register</a>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button\n          (click)=\"login()\"\n          mat-raised-button\n          color=\"primary\"\n          type=\"button\"\n        >\n          Login\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-detail/product-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card col-12 col-lg-7 mt-3\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-md-7 col-lg-7\">\n        <img src=\"{{ dog.image }}\" class=\"card-img\" alt=\"{{ dog.image }}\" />\n      </div>\n      <div class=\"col-12 col-md-5 col-lg-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ dog.breed | titlecase }}</h5>\n          <hr />\n          <p class=\"card-text\">\n            <strong>Details</strong> <br />\n            Breed - {{ dog.breed }} <br />\n            DOB - {{ dog.dob | date }} <br />\n            Sex - {{ dog.sex | titlecase }} <br />\n          </p>\n          <p class=\"card-text\">\n            <strong>Address</strong><br />\n            {{ dog.street | titlecase }}, <br />\n            {{ dog.city | titlecase }}, <br />\n            {{ dog.state | titlecase }}, <br />\n            {{ dog.pincode }}<br />\n          </p>\n          <p class=\"card-text\">\n            <strong>Sold by</strong><br />\n            {{ user.firstName | titlecase }} {{ user.lastName | titlecase }}\n            <br />\n          </p>\n          <p class=\"h4\">{{ dog.amount | currency: 'INR' }}</p>\n          <div>\n            <button mat-raised-button color=\"primary\" (click)=\"buy()\">\n              <mat-icon class=\"mr-2\">card_giftcard</mat-icon>Buy\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <mat-card class=\"col-12 col-lg-4\">\n    <div class=\"row gutters\">\n      <mat-card-header>\n        <mat-card-title>{{ dog.breed | titlecase }}</mat-card-title>\n        <mat-card-subtitle>{{ dog.dob | date }} </mat-card-subtitle>\n      </mat-card-header>\n      <img class=\"card-img\" src=\"{{ dog.image }}\" alt=\"\" />\n      <mat-card-content>\n        <p class=\"h5\">&#8377;{{ dog.amount }}</p>\n        <div class=\"mat-body\">\n          <p class=\"mat-body-2\">Details</p>\n          <p class=\"ml-2\">\n            Breed - {{ dog.breed }} <br />\n            DOB - {{ dog.dob | date }} <br />\n            Sex - {{ dog.sex }} <br />\n          </p>\n        </div>\n        <div>\n          <p class=\"mat-body-2\">Address</p>\n          <p class=\"ml-2\">\n            {{ dog.street }}, <br />\n            {{ dog.city }}, <br />\n            {{ dog.state }}, <br />\n            {{ dog.pincode }}<br />\n          </p>\n        </div>\n      </mat-card-content>\n    </div>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\">\n        <mat-icon class=\"mr-2\">card_giftcard</mat-icon>Buy\n      </button>\n      <button\n        *ngIf=\"\n          user.cartItems != null && !user.cartItems.includes(this.dogId);\n          else removeItem\n        \"\n        mat-flat-button\n        (click)=\"addToCart()\"\n      >\n        <mat-icon class=\"ml-1 mr-2 bg-warn\">add_shopping_cart</mat-icon>Add to\n        cart\n      </button>\n      <ng-template #removeItem>\n        <button mat-flat-button (click)=\"addToCart()\">\n          <mat-icon class=\"mr-2\">shopping_cart</mat-icon>\n          <p class=\"d-inline text-success\">Added to cart</p>\n        </button>\n      </ng-template> -->\n  <!-- <button *ngIf=\"true\" mat-icon-button (click)=\"unFav()\">\n        <mat-icon class=\"text-danger\">favorite</mat-icon>\n      </button>\n      <ng-template #unfav>\n        <button mat-icon-button (click)=\"addFav()\">\n          <mat-icon>favorite_border</mat-icon>\n        </button>\n      </ng-template>\n      <button class=\"ml-2\" mat-icon-button><mat-icon>share</mat-icon></button>\n    </mat-card-actions>\n  </mat-card>-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\n  <div class=\"col col-lg-3 mx-auto\">\n    <mat-card>\n      <mat-card-title>Sign up</mat-card-title>\n      <mat-card-content>\n        <form>\n          <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>First Name</mat-label>\n            <input\n              matInput\n              type=\"text\"\n              [(ngModel)]=\"registerUserData.firstName\"\n              name=\"firstName\"\n              required\n            />\n          </mat-form-field>\n          <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>Last Name</mat-label>\n            <input\n              matInput\n              type=\"text\"\n              [(ngModel)]=\"registerUserData.lastName\"\n              name=\"lastName\"\n              required\n            />\n          </mat-form-field>\n          <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input\n              matInput\n              type=\"email\"\n              [(ngModel)]=\"registerUserData.email\"\n              name=\"email\"\n              required\n            />\n          </mat-form-field>\n        </form>\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            type=\"password\"\n            [(ngModel)]=\"registerUserData.password\"\n            name=\"password\"\n            required\n          />\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button\n          (click)=\"registerUser()\"\n          mat-raised-button\n          color=\"primary\"\n          type=\"button\"\n        >\n          Submit\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/show-pets/show-pets.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/show-pets/show-pets.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"showcase\">\n    <mat-card *ngFor=\"let pet of pets\">\n      <mat-card-header>\n        <mat-card-title>{{ pet.breed | titlecase }}</mat-card-title>\n        <mat-card-subtitle>{{ pet.dob | date }} </mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{ pet.image }}\" alt=\"\" />\n      <mat-card-content> </mat-card-content>\n      <mat-card-actions>\n        <button\n          (click)=\"showDetails(pet)\"\n          class=\"mr-5 mr-lg-2\"\n          mat-stroked-button\n        >\n          VIEW\n        </button>\n        <button mat-icon-button><mat-icon>favorite</mat-icon></button>\n        <button mat-icon-button><mat-icon>share</mat-icon></button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_pets_show_pets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-pets/show-pets.component */ "./src/app/show-pets/show-pets.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/create-product/create-product.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");











var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'products', component: _show_pets_show_pets_component__WEBPACK_IMPORTED_MODULE_3__["ShowPetsComponent"] },
    { path: 'products/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] },
    {
        path: 'create',
        component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_8__["CreateProductComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    { path: 'checkout/:id', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _show_pets_show_pets_component__WEBPACK_IMPORTED_MODULE_3__["ShowPetsComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
    _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  justify-content: space-between;\r\n}\r\n\r\nspan {\r\n  margin-right: 1rem;\r\n}\r\n\r\n/* a:hover {\r\n  background-color: yellow;\r\n} */\r\n\r\na {\r\n  margin-right: 1rem;\r\n}\r\n\r\nmat-sidenav-container {\r\n  height: calc(100vh - 64px);\r\n}\r\n\r\nmat-sidenav {\r\n  width: 300px;\r\n  flex: 1;\r\n}\r\n\r\nh1.brand {\r\n  vertical-align: middle;\r\n  display: inline;\r\n  margin-left: 8px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  -webkit-text-decoration-style: none;\r\n          text-decoration-style: none;\r\n}\r\n\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  mat-sidenav-container {\r\n    height: calc(100vh - 56px);\r\n  }\r\n  mat-sidenav {\r\n    width: 70%;\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTztBQUNUOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4vKiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn0gKi9cclxuXHJcbmEge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5oMS5icmFuZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgfVxyXG4gIG1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.title = 'barking-lot';
        this.user = {
            _id: '',
            firstName: 'Guest',
            lastName: '',
            email: '',
            password: '',
            cartItems: []
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.getUser();
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/create-product/create-product.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_17__["CreateProductComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__["CheckoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _services_pets_service__WEBPACK_IMPORTED_MODULE_8__["PetsService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pets.service */ "./src/app/services/pets.service.ts");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(route, dogService) {
        this.route = route;
        this.dogService = dogService;
        this.dogId = '';
        this.dog = {
            user: '',
            breed: '',
            sex: '',
            image: '',
            dob: 0,
            street: '',
            city: '',
            state: '',
            pincode: 0,
            amount: 0
        };
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogId = this.route.snapshot.paramMap.get('id');
        this.dogService.getPet(this.dogId).subscribe(function (data) {
            _this.dog = data;
        }, function (error) {
            console.log(error);
        });
        paypal
            .Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: _this.dog.breed,
                            amount: {
                                currency_code: 'INR',
                                value: _this.dog.amount
                            }
                        }
                    ]
                });
            },
            onApprove: function (data, actions) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var order;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, actions.order.capture()];
                        case 1:
                            order = _a.sent();
                            console.log(order);
                            return [2 /*return*/];
                    }
                });
            }); },
            onError: function (err) {
                console.log(err);
            }
        })
            .render(this.paypalElement.nativeElement);
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_pets_service__WEBPACK_IMPORTED_MODULE_3__["PetsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', { static: true })
    ], CheckoutComponent.prototype, "paypalElement", void 0);
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/create-product/create-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-product/create-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-product/create-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-product/create-product.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dog */ "./src/app/dog.ts");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent(dogService, router, userService) {
        this.dogService = dogService;
        this.router = router;
        this.userService = userService;
        this.imageUploaded = false;
        this.dogModel = new _dog__WEBPACK_IMPORTED_MODULE_2__["Dog"]();
        this.fileSelected = false;
    }
    CreateProductComponent.prototype.ngOnInit = function () { };
    CreateProductComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file != null) {
            this.fileSelected = true;
            this.dogService.uploadImage(file).subscribe(function (res) {
                console.log(res);
                _this.dogModel.image = res.image;
                _this.imageUploaded = true;
                _this.fileSelected = false;
            }, function (err) {
                console.log(err);
                _this.fileSelected = false;
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.router.navigate(['/login']);
                    }
                    if (err.status === 500) {
                        _this.router.navigate(['/register']);
                    }
                }
            });
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function (event) {
                _this.imageUrl = reader_1.result;
            };
        }
        else {
            console.log('No file selected');
            this.fileSelected = false;
        }
    };
    CreateProductComponent.prototype.submit = function () {
        var _this = this;
        this.dogModel.user = this.userService.user._id;
        this.dogService.registerPet(this.dogModel).subscribe(function (data) {
            _this.router.navigate(["/products/" + data._id]);
        }, function (error) {
            console.log(error);
        });
    };
    CreateProductComponent.ctorParameters = function () { return [
        { type: _services_pets_service__WEBPACK_IMPORTED_MODULE_3__["PetsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    CreateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-product',
            template: __webpack_require__(/*! raw-loader!./create-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-product/create-product.component.html"),
            styles: [__webpack_require__(/*! ./create-product.component.css */ "./src/app/create-product/create-product.component.css")]
        })
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/dog.ts":
/*!************************!*\
  !*** ./src/app/dog.ts ***!
  \************************/
/*! exports provided: Dog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dog", function() { return Dog; });
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginUserData = {
            email: '',
            password: ''
        };
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.loginUserData).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            // console.log(res.user);
            // localStorage.setItem('user', res.user._id);
            _this.router.navigate(['/products']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.showError = true;
                }
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");





var MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, petsService, userService) {
        this.route = route;
        this.router = router;
        this.petsService = petsService;
        this.userService = userService;
        this.dog = {
            user: '',
            breed: '',
            sex: '',
            image: '',
            dob: 0,
            street: '',
            city: '',
            state: '',
            pincode: 0,
            amount: 0
        };
        this.dogId = 'unknown';
        this.user = {
            _id: '',
            firstName: 'Guest',
            lastName: '',
            email: '',
            password: '',
            cartItems: []
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogId = this.route.snapshot.paramMap.get('id');
        this.petsService.getPet(this.dogId).subscribe(function (data) {
            _this.dog = data;
            _this.userService.getUserById(data.user).subscribe(function (user) {
                _this.user = user;
                console.log(user);
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            console.log(error);
        });
        this.userService.getUser();
    };
    ProductDetailComponent.prototype.buy = function () {
        this.router.navigate(['/checkout/', this.dogId]);
    };
    ProductDetailComponent.prototype.unFav = function () {
        // TODO not cart Itens FavItems
        // const index = this.cartItems.indexOf(this.dog._id);
        // if (index > -1) {
        //   this.cartItems.splice(index, 1);
        //   this.user.updateCart(this.cartItems);
        // }
    };
    ProductDetailComponent.prototype.addFav = function () {
        // this.cartItems.push(this.dog._id);
        // this.user.updateCart(this.cartItems);
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_pets_service__WEBPACK_IMPORTED_MODULE_3__["PetsService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.auth.registerUser(this.registerUserData).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/products']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.registerUrl = '/api/register';
        this.loginUrl = '/api/login';
        this.userUrl = '/api/user';
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    AuthService.prototype.getUser = function () {
        return this.http.get(this.userUrl);
    };
    AuthService.prototype.logout = function () {
        this.userService.user = {
            _id: '',
            firstName: 'Guest',
            lastName: '',
            email: '',
            password: '',
            cartItems: []
        };
        localStorage.removeItem('token');
        this.router.navigate(['/products']);
    };
    AuthService.prototype.loggedIn = function () {
        // let veified = false;
        // this.http.get<any>(this.verifyUrl).subscribe(
        //   data => {
        //     console.log(data);
        //     veified = true;
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
        // if (veified) {
        //   return true;
        // } else {
        //   return false;
        // }
        return !!localStorage.getItem('token'); // !! to return boolean
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/pets.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/pets.service.ts ***!
  \******************************************/
/*! exports provided: PetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsService", function() { return PetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PetsService = /** @class */ (function () {
    function PetsService(http) {
        this.http = http;
        this.serverUrl = '/api';
    }
    PetsService.prototype.getPet = function (petId) {
        return this.http.get(this.serverUrl + '/pet', {
            params: { id: petId }
        });
    };
    PetsService.prototype.getPets = function () {
        return this.http.get(this.serverUrl + '/pets');
    };
    PetsService.prototype.registerPet = function (data) {
        console.log('Register pet: ' + data);
        return this.http.post(this.serverUrl + '/addDog', data);
    };
    PetsService.prototype.uploadImage = function (image) {
        var fd = new FormData();
        fd.append('image', image, image.name);
        return this.http.post(this.serverUrl + '/uploadImage', fd);
    };
    PetsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PetsService);
    return PetsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = '/api';
        this.user = {
            _id: '',
            firstName: 'Guest',
            lastName: '',
            email: '',
            password: '',
            cartItems: []
        };
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        this.http.get(this.serverUrl + '/user').subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    console.log(error);
                }
            }
        });
    };
    UserService.prototype.getUserById = function (uid) {
        return this.http.get(this.serverUrl + '/userById', {
            params: { id: uid }
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/show-pets/show-pets.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-pets/show-pets.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin: 8px;\r\n  width: 14rem;\r\n  flex: 1 1 0;\r\n}\r\n\r\n.showcase {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wZXRzL3Nob3ctcGV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1wZXRzL3Nob3ctcGV0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIHdpZHRoOiAxNHJlbTtcclxuICBmbGV4OiAxIDEgMDtcclxufVxyXG5cclxuLnNob3djYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/show-pets/show-pets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-pets/show-pets.component.ts ***!
  \**************************************************/
/*! exports provided: ShowPetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPetsComponent", function() { return ShowPetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pets.service */ "./src/app/services/pets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var ShowPetsComponent = /** @class */ (function () {
    function ShowPetsComponent(petsService, router, userService) {
        this.petsService = petsService;
        this.router = router;
        this.userService = userService;
        this.pets = [];
    }
    ShowPetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petsService.getPets().subscribe(function (data) { return (_this.pets = data); }, function (error) {
            console.log(error);
        });
        this.userService.getUser();
    };
    ShowPetsComponent.prototype.showDetails = function (pet) {
        this.router.navigate(['/products/', pet._id]);
    };
    ShowPetsComponent.ctorParameters = function () { return [
        { type: _services_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ShowPetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-pets',
            template: __webpack_require__(/*! raw-loader!./show-pets.component.html */ "./node_modules/raw-loader/index.js!./src/app/show-pets/show-pets.component.html"),
            styles: [__webpack_require__(/*! ./show-pets.component.css */ "./src/app/show-pets/show-pets.component.css")]
        })
    ], ShowPetsComponent);
    return ShowPetsComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Code\Angular\pet-store\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map