import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';


@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule {

}
