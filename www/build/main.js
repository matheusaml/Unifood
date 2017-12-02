webpackJsonp([13],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, navParams, auth, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.geolocation = geolocation;
    }
    HomePage.prototype.teste = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.auth.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/home/home.html"*/'<ion-header class="verde">\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="verde">Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="bg">\n    <ion-row><ion-col style="text-align:center">\n        <img src="../../assets/unifood.png">\n        </ion-col></ion-row>\n    <ion-grid>\n        <ion-row><ion-col style="text-align:center">\n      </ion-col></ion-row>\n      <ion-row><ion-col style="text-align:center">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod semper tortor nec sodales. Proin sagittis, urna ut rhoncus vehicula, ante tellus ornare tellus, vel sollicitudin mi ligula et purus. Praesent eleifend dapibus gravida. Quisque fermentum urna sed dolor aliquam, a facilisis eros mollis. Aenean commodo consequat orci, eget maximus ipsum egestas in. Nulla facilisi. Fusce pharetra hendrerit placerat. Donec eu tortor porttitor, hendrerit erat ac, mattis sapien. Quisque varius pretium orci id placerat. Proin pharetra est gravida arcu interdum, quis tempor felis accumsan. Quisque justo erat, tempor id ipsum et, lobortis scelerisque libero. Curabitur consectetur sapien magna, eget pharetra odio suscipit vel. Vivamus sit amet gravida ligula, sit amet accumsan nibh.</p><br>\n        <button icon-start class="botao botaocadastre" (click)="signOut()">\n            <ion-icon name="home"> </ion-icon>\n            Sair\n          </button>\n       \n        </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <div #map id="map"></div> \n  \n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* auth */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var auth = (function () {
    function auth(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    auth.prototype.cadastrar = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.login = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.signOut = function () {
        return this.signOutFirebase();
    };
    auth.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    return auth;
}());
auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], auth);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarEstabelecimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarEstabelecimentoPage = (function () {
    function EditarEstabelecimentoPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.novoEstabelecimento = {};
        var novoEstabelecimentoId = this.navParams.get('novoEstabelecimentoId');
        console.log(novoEstabelecimentoId);
        this.estabelecimento$ = this.database.object("Lista de Estabelecimentos/" + novoEstabelecimentoId);
        this.novoEstabelecimentoSubscription =
            this.estabelecimento$.subscribe(function (novoEstabelecimento) { return _this.novoEstabelecimento = novoEstabelecimento; });
    }
    EditarEstabelecimentoPage.prototype.editarNovoEstabelecimento = function (novoEstabelecimento) {
        this.estabelecimento$.update(novoEstabelecimento);
        this.navCtrl.pop();
    };
    EditarEstabelecimentoPage.prototype.ionViewWillLeave = function () {
        this.novoEstabelecimentoSubscription.unsubscribe();
    };
    return EditarEstabelecimentoPage;
}());
EditarEstabelecimentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-estabelecimento',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/editar-estabelecimento/editar-estabelecimento.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Modificar {{novoEstabelecimento.nome}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.nome"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Tipo</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.tipo"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Descricao</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.descricao"></ion-input>\n    </ion-item>\n\n    <button class="botaocadastrar" ion-button block (click)="editarNovoEstabelecimento(novoEstabelecimento)">Confirmar</button>\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/editar-estabelecimento/editar-estabelecimento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], EditarEstabelecimentoPage);

//# sourceMappingURL=editar-estabelecimento.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarItemPage = (function () {
    function EditarItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.novoItem = {};
        var novoItemId = this.navParams.get('novoItemId');
        console.log(novoItemId);
        this.Item$ = this.database.object("Lista de Items/" + novoItemId);
        this.novoItemSubscription =
            this.Item$.subscribe(function (novoItem) { return _this.novoItem = novoItem; });
    }
    EditarItemPage.prototype.editarNovoItem = function (novoItem) {
        this.Item$.update(novoItem);
        this.navCtrl.pop();
    };
    EditarItemPage.prototype.ionViewWillLeave = function () {
        this.novoItemSubscription.unsubscribe();
    };
    return EditarItemPage;
}());
EditarItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-item',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/editar-item/editar-item.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Modificar {{novoItem.nome}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.nome"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Tipo</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.tipo"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Descricao</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.descricao"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Preco</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.preco"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Quantidade</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.quantidade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Foto</ion-label>\n        <ion-input type="string" [(ngModel)]="novoItem.itemNumber"></ion-input>\n    </ion-item>\n\n    <button class="botaocadastrar" ion-button block (click)="editarNovoItem(novoItem)">Confirmar</button>\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/editar-item/editar-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], EditarItemPage);

//# sourceMappingURL=editar-item.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEstabelecimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_estabelecimento_editar_estabelecimento__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroEstabelecimentoPage = (function () {
    function CadastroEstabelecimentoPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.novoEstabelecimento = {};
        this.estabelecimento$ = this.database.list('Lista de Estabelecimentos');
    }
    CadastroEstabelecimentoPage.prototype.addEstabelecimento = function (novoEstabelecimento) {
        this.estabelecimento$.push({
            nome: this.novoEstabelecimento.nome,
            tipo: this.novoEstabelecimento.tipo,
            descricao: this.novoEstabelecimento.descricao,
        });
        this.novoEstabelecimento = {};
        this.navCtrl.pop();
    };
    CadastroEstabelecimentoPage.prototype.editar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_estabelecimento_editar_estabelecimento__["a" /* EditarEstabelecimentoPage */]);
    };
    return CadastroEstabelecimentoPage;
}());
CadastroEstabelecimentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro-estabelecimento',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/cadastro-estabelecimento/cadastro-estabelecimento.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Adicionar Estabelecimento</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item class="cordefundo"> \n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.nome"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Tipo</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.tipo"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Descricao</ion-label>\n        <ion-input type="text" [(ngModel)]="novoEstabelecimento.descricao"></ion-input>\n    </ion-item>\n\n    <!--     <ion-item no-lines>\n        <ion-label>Foto</ion-label>\n    </ion-item>\n\n     <ion-item>\n        <ion-input type="file" [(ngModel)]="novoEstabelecimento .foto"></ion-input>\n    </ion-item> -->\n<br>\n\n    <button ion-button block (click)="addEstabelecimento(novoEstabelecimento)" class="botaocadastrar">Adicionar Estabelecimento</button>\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/cadastro-estabelecimento/cadastro-estabelecimento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], CadastroEstabelecimentoPage);

//# sourceMappingURL=cadastro-estabelecimento.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl, authService, NavParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.NavParams = NavParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__["a" /* Usuario */]();
        this.CadastroPage = __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */];
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.authService.login(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    LoginPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
], LoginPage.prototype, "form", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n<!-- Testando o AAAAAAAABranch -->\n\n\n<ion-content padding class="bg">\n  <ion-row><ion-col style="text-align:center">\n  <img src="../../assets/unifood.png">\n  </ion-col></ion-row>\n<ion-grid>\n  <ion-row><ion-col style="text-align:center">\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item class="cordefundo">\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n\n      <ion-item class="cordefundo">\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button class="botao botaologin" [disabled]="!form.form.valid" (click)="login()">\n      ENTRAR\n    </button>\n\n</form>\n</ion-col></ion-row>\n<ion-row><ion-col style="text-align:center">\n  Não possui uma conta? <br>\n  <button icon-start class="botao botaocadastre" (click)="cadastrar()">\n      <ion-icon name="home"> </ion-icon>\n      CRIE AGORA\n    </button>\n \n  </ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* auth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__["a" /* Usuario */]();
    }
    CadastroPage.prototype.cadastrar = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.cadastrar(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                toast_1.present();
            });
        }
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    return CadastroPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
], CadastroPage.prototype, "form", void 0);
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Usuários</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg">\n    <ion-grid>\n        <ion-row><ion-col style="text-align:center">\n<form #form="ngForm" novalidate>\n    <ion-list>\n\n        <ion-item class="cordefundo">\n            <ion-label stacked>Nome</ion-label>\n            <ion-input type="text" name="nome" [(ngModel)]="user.nome" #email="ngModel" required></ion-input>\n          </ion-item>\n\n        <ion-item class="cordefundo">\n            <ion-label stacked>CPF ou CNPJ</ion-label>\n            <ion-input type="text" name="tipo" [(ngModel)]="user.tipo" #email="ngModel" required></ion-input>\n          </ion-item>\n          \n\n      <ion-item class="cordefundo">\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item class="cordefundo">\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n  \n\n    </ion-list>\n<ion-col style="text-align:center">\n    <button class="botao botaocadastrar" block color="primary" [disabled]="!form.form.valid" (click)="cadastrar()">\n      CADASTRAR\n    </button>\n  </ion-col>\n  </form>\n  </ion-col></ion-row></ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* auth */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioPessoaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_item_cadastro_item__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardapioPessoaPage = (function () {
    function CardapioPessoaPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.param = "";
        this.param2 = "";
        this.param3 = "";
        this.Item$ = this.database.list('Lista de Items');
    }
    CardapioPessoaPage.prototype.selecionarNovoItem = function (novoItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__carrinho_carrinho__["a" /* CarrinhoPage */], { 'param': novoItem.nome, 'param2': novoItem.preco, 'param3': novoItem.descricao });
    };
    CardapioPessoaPage.prototype.cadastroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_item_cadastro_item__["a" /* CadastroItemPage */]);
    };
    return CardapioPessoaPage;
}());
CardapioPessoaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cardapiopessoa',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/cardapiopessoa/cardapiopessoa.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Cardápio</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cadastroPage()">\n       </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n        <ion-card class="bg">\n                <ion-list>\n                        <ion-item *ngFor="let item of Item$ | async" (click)="selecionarNovoItem(item)">                      \n                        <ion-thumbnail item-start>\n                        <img src="../../assets/salmao.jpg">\n                      </ion-thumbnail>\n                      <h2>{{item.nome}}</h2>\n                      <h3>{{item.quantidade}} pessoa(s) - R$ {{item.preco}},00</h3>\n                      <h3>{{item.descricao}}</h3>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/cardapiopessoa/cardapiopessoa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
], CardapioPessoaPage);

//# sourceMappingURL=cardapiopessoa.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrinhoPage = (function () {
    function CarrinhoPage(navCtrl, navParams, database, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.param = navParams.get('param');
        this.param2 = navParams.get('param2');
        this.param3 = navParams.get('param3');
    }
    CarrinhoPage.prototype.showToastWithCloseButton = function (novoItem) {
        var toast = this.toastCtrl.create({
            message: 'O produto foi adicionado ao carrinho com sucesso',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    return CarrinhoPage;
}());
CarrinhoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carrinho',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/carrinho/carrinho.html"*/'<!--\n  Generated template for the CarrinhoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Descrição</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        <img src="assets/salmao.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{param}}\n            </ion-card-title>\n          <p>\n            Preço: R$ {{param2}},00\n          </p>\n          <h3>Descrição: {{param3}}</h3>\n        </ion-card-content>\n      </ion-card>\n\n        <ion-fab bottom right>\n            <button color="secondary" ion-fab class="fab fab-ios fab-ios-danger" (click)="showToastWithCloseButton()"><ion-icon class="fab-close-icon icon icon-ios ion-ios-close" name="close" role="img" aria-label="close"></ion-icon><span class="button-inner"><ion-icon name="add" role="img" class="icon icon-ios ion-ios-add" aria-label="add"></ion-icon></span><div class="button-effect"></div></button>\n          </ion-fab>\n\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/carrinho/carrinho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], CarrinhoPage);

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrodecomprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarrodecomprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrodecomprasPage = (function () {
    function CarrodecomprasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarrodecomprasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrodecomprasPage');
    };
    return CarrodecomprasPage;
}());
CarrodecomprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carrodecompras',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/carrodecompras/carrodecompras.html"*/'<!--\n  Generated template for the CarrodecomprasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Carro de compras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="bg">\n        <ion-list>\n                <button ion-item>\n                  <ion-icon name="ios-basket" item-start></ion-icon>\n                  Salmão\n                </button>\n            \n                <button ion-item>\n                  <ion-icon name="ios-basket" item-start></ion-icon>\n                  Refrigerante\n                </button>\n            \n                <button ion-item>\n                  <ion-icon name="ios-basket" item-start></ion-icon>\n                  Brigadeiro\n                </button>\n        </ion-list>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/carrodecompras/carrodecompras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CarrodecomprasPage);

//# sourceMappingURL=carrodecompras.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_item_editar_item__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_item_cadastro_item__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaItemPage = (function () {
    function ListaItemPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.Item$ = this.database.list('Lista de Items');
    }
    ListaItemPage.prototype.selecionarNovoItem = function (novoItem) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + novoItem.nome,
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_item_editar_item__["a" /* EditarItemPage */], { novoItemId: novoItem.$key });
                    }
                },
                {
                    text: 'Remover',
                    role: 'destructive',
                    handler: function () {
                        _this.Item$.remove(novoItem.$key);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("CANCELADO");
                    }
                }
            ]
        }).present();
    };
    ListaItemPage.prototype.cadastroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_item_cadastro_item__["a" /* CadastroItemPage */]);
    };
    return ListaItemPage;
}());
ListaItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-item',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/lista-item/lista-item.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Cardápio Administrativo</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cadastroPage()">\n         <ion-icon name="add"></ion-icon>\n       </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n        <ion-card class="bg">\n                <ion-list>\n                        <ion-item *ngFor="let item of Item$ | async" (click)="selecionarNovoItem(item)">                      \n                        <ion-thumbnail item-start>\n                        <img src="../../assets/salmao.jpg">\n                      </ion-thumbnail>\n                      <h2>{{item.nome}}</h2>\n                      <h3>{{item.quantidade}} pessoa(s) - R$ {{item.preco}},00</h3>\n                      <h3>{{item.descricao}}</h3>\n                      <button ion-button clear item-end>Opções</button>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/lista-item/lista-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ListaItemPage);

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaEstabelecimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_estabelecimento_editar_estabelecimento__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_estabelecimento_cadastro_estabelecimento__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaEstabelecimentoPage = (function () {
    function ListaEstabelecimentoPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.estabelecimento$ = this.database.list('Lista de Estabelecimentos');
    }
    ListaEstabelecimentoPage.prototype.selecionarNovoestabelecimento = function (novoEstabelecimento) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + novoEstabelecimento.nome,
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_estabelecimento_editar_estabelecimento__["a" /* EditarEstabelecimentoPage */], { novoEstabelecimentoId: novoEstabelecimento.$key });
                    }
                },
                {
                    text: 'Remover',
                    role: 'destructive',
                    handler: function () {
                        _this.estabelecimento$.remove(novoEstabelecimento.$key);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("CANCELADO");
                    }
                }
            ]
        }).present();
    };
    ListaEstabelecimentoPage.prototype.cadastroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_estabelecimento_cadastro_estabelecimento__["a" /* CadastroEstabelecimentoPage */]);
    };
    return ListaEstabelecimentoPage;
}());
ListaEstabelecimentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-estabelecimento',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/lista-estabelecimento/lista-estabelecimento.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Lista dos Estabelecimentos</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cadastroPage()">\n         <ion-icon name="add"></ion-icon>\n       </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n        <ion-card class="bg">\n                <ion-list>\n                        <ion-item *ngFor="let estabelecimento of estabelecimento$ | async" (click)="selecionarNovoestabelecimento(estabelecimento)">                      \n                        <ion-thumbnail item-start>\n                        <img src="../../assets/salmao.jpg">\n                      </ion-thumbnail>\n                      <h1>{{estabelecimento.nome}}</h1>\n                      <h2>{{estabelecimento.tipo}}</h2>\n                      <h3>{{estabelecimento.descricao}}</h3>\n                      <button ion-button clear item-end>Opções</button>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/lista-estabelecimento/lista-estabelecimento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ListaEstabelecimentoPage);

//# sourceMappingURL=lista-estabelecimento.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RelatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatoriosPage = (function () {
    function RelatoriosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RelatoriosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatoriosPage');
    };
    return RelatoriosPage;
}());
RelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-relatorios',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/relatorios/relatorios.html"*/'<!--\n  Generated template for the RelatoriosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Relatórios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item.nome }}\n    </button>  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/relatorios/relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], RelatoriosPage);

//# sourceMappingURL=relatorios.js.map

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-estabelecimento/cadastro-estabelecimento.module": [
		994,
		12
	],
	"../pages/cadastro-item/cadastro-item.module": [
		993,
		11
	],
	"../pages/cadastro/cadastro.module": [
		995,
		10
	],
	"../pages/cardapio/cardapio.module": [
		996,
		9
	],
	"../pages/cardapiopessoa/cardapiopessoa.module": [
		997,
		8
	],
	"../pages/carrinho/carrinho.module": [
		998,
		7
	],
	"../pages/carrodecompras/carrodecompras.module": [
		999,
		6
	],
	"../pages/editar-estabelecimento/editar-estabelecimento.module": [
		1000,
		5
	],
	"../pages/editar-item/editar-item.module": [
		1001,
		4
	],
	"../pages/lista-estabelecimento/lista-estabelecimento.module": [
		1003,
		3
	],
	"../pages/lista-item/lista-item.module": [
		1002,
		2
	],
	"../pages/login/login.module": [
		1005,
		1
	],
	"../pages/relatorios/relatorios.module": [
		1004,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardapioPage = (function () {
    function CardapioPage() {
    }
    CardapioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapioPage');
    };
    return CardapioPage;
}());
CardapioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cardapio',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/cardapio/cardapio.html"*/'<!--\n  Generated template for the CardapioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cardapio Ad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n  <ion-card class="bg">\n    <ion-list>\n        <ion-item class="bg">\n          <ion-thumbnail item-start>\n            <img src="../../assets/salmao.jpg">\n          </ion-thumbnail>\n          <h2>Salmão Grelhado</h2>\n          <p>2 pessoas • R$30</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="../../assets/peixe.jpg">\n            </ion-thumbnail>\n            <h2>Peixe Frito</h2>\n            <p>4 pessoas • R$50</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="../../assets/download.jpeg">\n              </ion-thumbnail>\n              <h2>1/2 Carne de sol</h2>\n              <p>3 pessoas • R$40</p>\n              <button ion-button clear item-end>View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="../../assets/salmao.jpg">\n                </ion-thumbnail>\n                <h2>Salmão Grelhado</h2>\n                <p>2 pessoas • R$30</p>\n                <button ion-button clear item-end>View</button>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="../../assets/salmao.jpg">\n                  </ion-thumbnail>\n                  <h2>Salmão Grelhado</h2>\n                  <p>2 pessoas • R$30</p>\n                  <button ion-button clear item-end>View</button>\n                </ion-item>\n      </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/cardapio/cardapio.html"*/,
    })
], CardapioPage);

//# sourceMappingURL=cardapio.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(585);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_editar_estabelecimento_editar_estabelecimento__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_lista_estabelecimento_lista_estabelecimento__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_estabelecimento_cadastro_estabelecimento__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_relatorios_relatorios__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cardapiopessoa_cardapiopessoa__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_item_lista_item__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_editar_item_editar_item__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_item_cadastro_item__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_carrinho_carrinho__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cardapio_cardapio__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_cloud_angular__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_firebase_firebase__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_cardapio_serv_cardapio_serv__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_carrodecompras_carrodecompras__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var config = {
    apiKey: "AIzaSyBmEILYLUQCPidLQlu46Gqp4pofizncc-c",
    authDomain: "foodtruck-7d176.firebaseapp.com",
    databaseURL: "https://foodtruck-7d176.firebaseio.com",
    projectId: "foodtruck-7d176",
    storageBucket: "",
    messagingSenderId: "65072533397"
};
var cloudSettings = {
    'core': {
        'app_id': '0673d468'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_17__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_item_cadastro_item__["a" /* CadastroItemPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_editar_item_editar_item__["a" /* EditarItemPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_lista_item_lista_item__["a" /* ListaItemPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cardapiopessoa_cardapiopessoa__["a" /* CardapioPessoaPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_relatorios_relatorios__["a" /* RelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_carrodecompras_carrodecompras__["a" /* CarrodecomprasPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_estabelecimento_cadastro_estabelecimento__["a" /* CadastroEstabelecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_lista_estabelecimento_lista_estabelecimento__["a" /* ListaEstabelecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_editar_estabelecimento_editar_estabelecimento__["a" /* EditarEstabelecimentoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cadastro-item/cadastro-item.module#CadastroItemModulePage', name: 'CadastroItemPage', segment: 'cadastro-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro-estabelecimento/cadastro-estabelecimento.module#CadastroEstabelecimentoModulePage', name: 'CadastroEstabelecimentoPage', segment: 'cadastro-estabelecimento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardapio/cardapio.module#CardapioPageModule', name: 'CardapioPage', segment: 'cardapio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardapiopessoa/cardapiopessoa.module#CardapiopessoaPageModule', name: 'CardapioPessoaPage', segment: 'cardapiopessoa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carrodecompras/carrodecompras.module#CarrodecomprasPageModule', name: 'CarrodecomprasPage', segment: 'carrodecompras', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editar-estabelecimento/editar-estabelecimento.module#EditarEstabelecimentoModulePage', name: 'EditarEstabelecimentoPage', segment: 'editar-estabelecimento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editar-item/editar-item.module#EditarItemModulePage', name: 'EditarItemPage', segment: 'editar-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-item/lista-item.module#ListaItemPageModule', name: 'ListaItemPage', segment: 'lista-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-estabelecimento/lista-estabelecimento.module#ListaEstabelecimentoPageModule', name: 'ListaEstabelecimentoPage', segment: 'lista-estabelecimento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/relatorios/relatorios.module#RelatoriosPageModule', name: 'RelatoriosPage', segment: 'relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_item_cadastro_item__["a" /* CadastroItemPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_editar_item_editar_item__["a" /* EditarItemPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_lista_item_lista_item__["a" /* ListaItemPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cardapiopessoa_cardapiopessoa__["a" /* CardapioPessoaPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_relatorios_relatorios__["a" /* RelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_carrodecompras_carrodecompras__["a" /* CarrodecomprasPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_estabelecimento_cadastro_estabelecimento__["a" /* CadastroEstabelecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_lista_estabelecimento_lista_estabelecimento__["a" /* ListaEstabelecimentoPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_editar_estabelecimento_editar_estabelecimento__["a" /* EditarEstabelecimentoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_17__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* auth */],
            __WEBPACK_IMPORTED_MODULE_26__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_cardapio_serv_cardapio_serv__["a" /* CardapioServProvider */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_item_editar_item__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroItemPage = (function () {
    function CadastroItemPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.novoItem = {};
        this.Item$ = this.database.list('Lista de Items');
    }
    CadastroItemPage.prototype.addItem = function (novoItem) {
        this.Item$.push({
            nome: this.novoItem.nome,
            tipo: this.novoItem.tipo,
            descricao: this.novoItem.descricao,
            preco: this.novoItem.preco,
        });
        this.novoItem = {};
        this.navCtrl.pop();
    };
    CadastroItemPage.prototype.editar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_item_editar_item__["a" /* EditarItemPage */]);
    };
    return CadastroItemPage;
}());
CadastroItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro-item',template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/pages/cadastro-item/cadastro-item.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Adicionar Items</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item class="cordefundo"> \n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.nome"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Tipo</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.tipo"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Descricao</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.descricao"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Preco</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.preco"></ion-input>\n    </ion-item>\n\n    <ion-item class="cordefundo">\n        <ion-label floating>Quantidade</ion-label>\n        <ion-input type="text" [(ngModel)]="novoItem.quantidade"></ion-input>\n    </ion-item>\n\n    <!--     <ion-item no-lines>\n        <ion-label>Foto</ion-label>\n    </ion-item>\n\n     <ion-item>\n        <ion-input type="file" [(ngModel)]="novoItem.foto"></ion-input>\n    </ion-item> -->\n\n    <button ion-button block (click)="addItem(novoItem)" class="botaocadastrar">Adicionar Item</button>\n</ion-content>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/pages/cadastro-item/cadastro-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
], CadastroItemPage);

//# sourceMappingURL=cadastro-item.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lista_estabelecimento_lista_estabelecimento__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_carrodecompras_carrodecompras__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_item_cadastro_item__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_item_lista_item__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cardapiopessoa_cardapiopessoa__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_relatorios_relatorios__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_estabelecimento_cadastro_estabelecimento__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //PAGINA INICIAL DO APLICATIVO
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
            { title: 'Cadastrar Item', component: __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_item_cadastro_item__["a" /* CadastroItemPage */] },
            { title: 'Cardápio Administrativo', component: __WEBPACK_IMPORTED_MODULE_9__pages_lista_item_lista_item__["a" /* ListaItemPage */] },
            { title: 'Cardapio Pessoa', component: __WEBPACK_IMPORTED_MODULE_10__pages_cardapiopessoa_cardapiopessoa__["a" /* CardapioPessoaPage */] },
            { title: 'Relatorios', component: __WEBPACK_IMPORTED_MODULE_11__pages_relatorios_relatorios__["a" /* RelatoriosPage */] },
            { title: 'Carro de Compras', component: __WEBPACK_IMPORTED_MODULE_1__pages_carrodecompras_carrodecompras__["a" /* CarrodecomprasPage */] },
            { title: 'Cadastrar Estabelecimento', component: __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_estabelecimento_cadastro_estabelecimento__["a" /* CadastroEstabelecimentoPage */] },
            { title: 'Listar Estabelecimento', component: __WEBPACK_IMPORTED_MODULE_0__pages_lista_estabelecimento_lista_estabelecimento__["a" /* ListaEstabelecimentoPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/matheusmedeiros/Unifood/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheusmedeiros/Unifood/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.listar = function () {
        return this.afd.list('/medicos/');
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioServProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CardapioServProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CardapioServProvider = (function () {
    function CardapioServProvider(db, angularFireAuth, fb) {
        this.db = db;
        this.angularFireAuth = angularFireAuth;
        this.fb = fb;
    }
    CardapioServProvider.prototype.getAll = function () {
        return this.items;
    };
    CardapioServProvider.prototype.save = function (item) {
        if (item.$nome) {
            return this.items.update(item.$nome, { nome: item.nome });
        }
        else {
            return this.items.push({ nome: item.nome, foto: item.foto, preco: item.preco });
        }
    };
    CardapioServProvider.prototype.uploadSalvar = function (item) {
        var itemcarrinho = { nome: item.nome, foto: item.foto, preco: item.preco };
        this.save(itemcarrinho);
    };
    return CardapioServProvider;
}());
CardapioServProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */]])
], CardapioServProvider);

//# sourceMappingURL=cardapio-serv.js.map

/***/ })

},[580]);
//# sourceMappingURL=main.js.map