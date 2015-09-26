var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { IonicComponent, IonicView } from '../../config/decorators';
/**
 * TODO
 */
export let SearchBar = class extends Ion {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     * @param {IonicConfig} config  TODO
     */
    constructor(elementRef, config //,
        ) {
        super(elementRef, config);
        // this.controlDirective = cd;
        // cd.valueAccessor = this; //ControlDirective should inject CheckboxControlDirective
        this.query = '';
    }
    /**
     * Much like ngModel, this is called from our valueAccessor for the attached
     * ControlDirective to update the value internally.
     */
    writeValue(value) {
        this.value = value;
    }
    inputChanged(event) {
        this.value = event.target.value;
        console.log('Search changed', this.value);
        // TODO: Better way to do this?
        this.controlDirective._control().updateValue(event.target.value);
    }
    inputFocused() {
        this.isFocused = true;
        this.shouldLeftAlign = true;
    }
    inputBlurred() {
        this.isFocused = false;
        this.shouldLeftAlign = this.value.trim() != '';
    }
};
SearchBar = __decorate([
    IonicComponent({
        selector: 'ion-search-bar',
        properties: [
            'list',
            'query'
        ],
        defaultProperties: {
            'cancelText': 'Cancel',
            'placeholder': 'Search'
        }
    }),
    IonicView({
        template: `
  <div class="search-bar-input-container" [class.left-align]="shouldLeftAlign">
    <div class="search-bar-icon"></div>
    <input (focus)="inputFocused()" (blur)="inputBlurred()"
    (input)="inputChanged($event)" class="search-bar-input" type="search" [attr.placeholder]="placeholder">
  </div>
  <button class="search-bar-cancel">{{cancelText}}</button>`
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b) || Object])
], SearchBar);
var _a, _b;
/*
export class SearchPipe extends Pipe {
  constructor() {
    super();
    this.state = 0;
  }

  supports(newValue) {
    return true;
  }

  transform(value, ...args) {
    console.log('Transforming', value, args);
    return value;
    //return `${value} state:${this.state ++}`;
  }

  create(cdRef) {
    console.log('REF', cdRef);
    return new SearchPipe(cdRef);
  }
}
*/