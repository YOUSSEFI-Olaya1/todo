import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  /*
  async ngOnInit() {
  await this.router.navigate(['loader']);
    // Appeler ici une méthode qui charge les données de votre application
    await this.router.navigate(['login']);
}
*/}