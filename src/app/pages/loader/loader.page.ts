import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {NavController } from "@ionic/angular";
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  stopLoadingDate = new Date(700);
  constructor(private loadingController: LoadingController, private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  async ionViewDidEnter() {
    
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
   // await loading.present();
   // Vérifier périodiquement si la date d'arrêt est dépassée
   const intervalId = setInterval(() => {
    if (this.shouldStopLoading()) {
      clearInterval(intervalId);
      loading.dismiss();
      this.router.navigateByUrl('/login');
    }}, 7000); // Vérifier toutes les 100 millisecondes
}


  private shouldStopLoading(): boolean {
    return this.stopLoadingDate && this.stopLoadingDate < new Date();
  }
}

