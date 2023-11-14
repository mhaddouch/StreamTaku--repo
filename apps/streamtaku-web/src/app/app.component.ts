import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@avans-nx-individueel/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule],
  selector: 'avans-nx-individueel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'streamtaku-web';
}
