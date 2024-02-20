import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isScrolled: Boolean = false;

  @HostListener('window:scroll', [])
  onWindowScrol() {
    this.isScrolled = window.scrollY > 400;
  }

}
