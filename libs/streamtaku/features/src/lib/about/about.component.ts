import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avans-nx-individueel-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = 'streamtaku-web';
  imagePath?: string;
  ngOnInit(): void {
    this.imagePath = '/assets/CasusClientSideFrameworks.drawio.png';
  }
}
