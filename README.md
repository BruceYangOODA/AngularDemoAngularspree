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

@style.scss   
@import '~ngx-toastr/toastr-bs4-alert';   

@module.ts    
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
imports: [    
    ToastrModule.forRoot(),    
    BrowserAnimationsModule   
  ],    

@angular.json  
"styles": [   
    "./node_modules/bootstrap/dist/css/bootstrap.css",   
    "./node_modules/ngx-toastr/toastr.css"    
]   
"scripts": [  
  "./node_modules/jquery/dist/jquery.js",  
  "./node_modules/bootstrap/dist/js/bootstrap.js" 
] 


$ cd src/app    
$ ng g m shared/shared    





