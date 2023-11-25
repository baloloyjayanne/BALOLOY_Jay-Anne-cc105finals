import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  toggleMode(): void {
    // this.darkMode = !this.darkMode;
    // document.body.classList.toggle('dark-mode', this.darkMode);
    // document.body.classList.toggle('light-mode', !this.darkMode);

    this.darkMode = !this.darkMode;
  if (this.darkMode) {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
  }
}