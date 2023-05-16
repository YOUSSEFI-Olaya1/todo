import { Component, OnInit } from '@angular/core';
import {NavController } from "@ionic/angular";
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor( public router:Router,
  private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToContact(){
    this.navCtrl.navigateForward('contact');
      }
      goToaboutus(){
        this.navCtrl.navigateForward('about');
          }
          goToRLogin(){
            this.navCtrl.navigateForward('login');
              }
}
