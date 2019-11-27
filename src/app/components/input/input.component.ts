import {Component, Input, forwardRef, ViewChild, ElementRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor {
  @Input('label') label: string = 'Label';
  @Input('type') type: string = 'text';
  @Input('defaultTexts') defaultTexts: { placeholder: string, label: string } = { placeholder: 'Placeholder', label: 'Label' };
  @Input('placeholder') placeholder: string = 'Placeholder';
  @Input('hasError') hasError: boolean;
  @ViewChild('input', { static: false }) inputRef: ElementRef;

  public focused: boolean = false;
  private inputWasFilled: boolean = false;
  model: any;

  private onModelChange: (v: any) => void;
  private onModelTouched: () => void;

  constructor() { }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.model = value;
    }
  }

  labelClick() {
    this.inputRef.nativeElement.focus();
  }

  registerOnChange(fn: (v: any) => void) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onModelTouched = fn;
  }

  onInput() {
    this.onModelChange(this.model);
    this.onModelTouched();
    this.inputWasFilled = !!this.model;
  }

  trim() {
    const value = this.model.trim();
    this.onModelChange(value);
    if (this.inputWasFilled) this.onModelTouched();
    this.writeValue(value);
    this.focused = false;

  }

  onFocus() {
    this.focused = true;
  }
}
