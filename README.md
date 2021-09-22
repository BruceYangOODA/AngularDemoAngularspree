## [Github Angularspree](https://github.com/aviabird/angularspree)  

$ ng new [項目名稱] --skip-tests    
$ cd [項目名稱]   
$ ng add @angular/material    
$ npm install jquery --save   
$ npm install bootstrap@4 --save    
讓 typescript 認識外部API方法    
$ npm install @types/jquery --save-dev    
$ npm install @types/bootstrap --save-dev   

$ npm install ngx-toastr --save   
$ npm install @angular/animations --save    
[API ngx-toastr](https://www.npmjs.com/package/ngx-toastr)     
$ npm install ngx-json-ld --save        
[API ngx-json-ld](https://www.npmjs.com/package/ngx-json-ld)     

$ npm install ngx-progressbar --save        
[API ngx-progressbar](https://medium.com/letsboot/lets-add-a-progress-bar-to-angular-4-apps-using-ngx-progressbar-45a2a1089d4e)      

$ npm install @ngx-translate/core       
$ npm install @ngx-translate/http-loader       

$ ng add ngx-bootstrap   
// npm install ngx-bootstrap --save      
// npm install ngx-bootstrap bootstrap --save      
     

@style.scss   
@import '~ngx-toastr/toastr-bs4-alert';     

@index.html     
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2">

@app.module.ts      
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';     
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';      
imports: [      
    BrowserAnimationsModule,        
    BsDropdownModule.forRoot()      
  ]     


@module.ts    
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { NgxJsonLdModule } from 'ngx-json-ld';      
import { NgProgressModule } from 'ngx-progressbar';     
import { TranslateModule } from '@ngx-translate/core';      
import { TranslateHttpLoader } from '@ngx-translate/http-loader';    
import { ModalModule } from 'ngx-bootstrap/modal';  
import { HttpClientModule ,HttpClient } from '@angular/common/http';       

export function HttpLoaderFactory(http: HttpClient) {       
return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')     
}      

imports: [    
    ToastrModule.forRoot(),    
    ModalModule.forRoot(),      
    BrowserAnimationsModule,        
    HttpClientModule,         
TranslateModule.forRoot({       
defaultLanguage: 'cn',      
loader: {       
provide: TranslateLoader,       
useFactory: HttpLoaderFactory,      
deps: [HttpClient]      
}       
}) 
  ],    

@angular.json 
bulid: {               
"styles": [   
    "./node_modules/bootstrap/dist/css/bootstrap.css",   
    "./node_modules/ngx-toastr/toastr.css"    
]   
"scripts": [  
  "./node_modules/jquery/dist/jquery.js",  
  "./node_modules/bootstrap/dist/js/bootstrap.js" 
]   
"assets": [     
    "src/manifest.json"  讓index.html認識這個檔案     
]       


$ cd src/app    
$ ng g m shared/shared    




----I18N----
@ component.ts      
import { TranslateService } from '@ngx-translate/core';     
constructor(private translateService: TranslateService) { }     

public selectLanguage(event: any) {     
this.translateService.use(event.target.value)       
}       

@ component.html        
< select (change)="selectLanguage($event)">     
< option value="cn"> 中文 < /option>      
< option value="en"> English < /option>     
< /select>      

@ assest/i18/cn.json        
{       
"choose_language": "選擇語言",      
"language.english": "英文",       
"language.chinese": "中文",       
"title": "國際化",     
"welcome": "歡迎"     
}       

----I18N----


[Web [掘竅] 為什麼要使用 rel="noreferrer noopener"，談 target="_blank" 的安全性風險](https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html)      

這時候你會發現你在 A 站的網頁默默轉址到了 Google 的頁面。      
這種做法主要是利用一般人只會注意新開的視窗（B 站），而忽略了原有的視窗（A 站），      
但若不進一步處理，新開的視窗是有機會可以修改到原視窗內所瀏覽的網址的。     
因此，若你使用的 target="_blank" 的話，會建議你要加上 rel="noreferrer noopener"，      
以確保使用者當前瀏覽的頁面，不會因為開新視窗後被另開的這個網站給影響。     

------         
FontAweomse         
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">              

------         
bootstrap      
  <!-- include bootstrap stylesheets -->          
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">    



### ngu-carousel         

[API ngu-carousel](https://www.npmjs.com/package/@ngu/carousel)          

$ npm i --save @ngu/carousel@latest          
$ npm install hammerjs --save      

module.ts      
import { NguCarouselModule } from '@ngu/carousel';          

@NgModule({         
  imports: [NguCarouselModule]          
})        

main.ts        
import 'hammerjs';       

component.ts        
import { NguCarouselConfig } from '@ngu/carousel';          
          
  public carouselTileConfig: NguCarouselConfig = {          
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },      
    slide: 1,       
    speed: 500,          
    point: {        
      visible: true      
    },         
    touch: true,         
    velocity: 0,         
    loop: true,          
    interval: { timing: 5000 },         
    animation: 'lazy',        
    custom: 'banner'          
  };      
          



# AngularSpree

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
