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

@style.scss   
@import '~ngx-toastr/toastr-bs4-alert';     

@app.module.ts      
import { TranslateModule } from '@ngx-translate/core';      
import { TranslateHttpLoader } from '@ngx-translate/http-loader';     

export function HttpLoaderFactory(http: HttpClient) {       
return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')     
}      

imports: [      
TranslateHttpLoader,    
TranslateModule.forRoot({       
defaultLanguage: 'cn',      
loader: {       
provide: TranslateLoader,       
useFactory: HttpLoaderFactory,      
deps: [HttpClient]      
}       
}) 
]     

@module.ts    
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { NgxJsonLdModule } from 'ngx-json-ld';      
import { NgProgressModule } from 'ngx-progressbar';     
  
imports: [    
    ToastrModule.forRoot(),    
    BrowserAnimationsModule,        
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
"assets": [     
    "src/manifest.json"     
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



