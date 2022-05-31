import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

}
