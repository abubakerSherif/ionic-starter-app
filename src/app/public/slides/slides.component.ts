import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
@ContentChild(IonInput) input!: IonInput;
@Input() public slides:any;


constructor() {
}
ngOnInit(){  
}
}
