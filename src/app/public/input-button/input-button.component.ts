import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {
@ContentChild(IonInput) input!: IonInput;
@Input() public item:any;
constructor() {
}
ngOnInit(){
}
}
