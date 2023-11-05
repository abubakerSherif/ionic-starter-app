import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public router:Router,
  ) {}

  ngOnInit(){

  }

  navigateToProfile(){
    this.router.navigate(['/profile'])

    
  }
  
}
