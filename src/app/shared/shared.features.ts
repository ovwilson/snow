import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared-material.module';
import { LoggerComponent, APIService } from './../features';


const COMPONENT_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedMaterialModule
];

const COMPONENTS = [LoggerComponent];

@NgModule({
    imports: COMPONENT_MODULES,
    declarations: COMPONENTS,
    entryComponents: [],
    providers: [APIService],
    exports: [...COMPONENT_MODULES, ...COMPONENTS]
})
export class SharedModule { }