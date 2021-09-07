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

$ npm install ngx-bootstrap --save       

@style.scss   
@import '~ngx-toastr/toastr-bs4-alert';     


@module.ts    
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { NgxJsonLdModule } from 'ngx-json-ld';      
import { NgProgressModule } from 'ngx-progressbar';     
import { TranslateModule } from '@ngx-translate/core';      
import { TranslateHttpLoader } from '@ngx-translate/http-loader';    
import { ModalModule } from 'ngx-bootstrap/modal';  

export function HttpLoaderFactory(http: HttpClient) {       
return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')     
}      

imports: [    
    ToastrModule.forRoot(),    
    ModalModule.forRoot(),      
    BrowserAnimationsModule,        
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





