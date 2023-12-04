import { Component } from '@angular/core';
import { ThemeService } from './Theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc105finals';

  constructor(private themeService: ThemeService) {}

  onToggleClick(): void {
    this.themeService.toggleMode();
   
  }
}
