import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared-material.module';
import { LoggerComponent } from './../features';


const COMPONENT_MODULES = [
    CommonModule,
    FormsModule,
    SharedMaterialModule
];

const COMPONENTS = [LoggerComponent];

@NgModule({
    imports: COMPONENT_MODULES,
    declarations: COMPONENTS,
    entryComponents: [],
    exports: [...COMPONENT_MODULES, ...COMPONENTS]
})
export class SharedModule { }