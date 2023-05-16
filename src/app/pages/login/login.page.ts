import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import { FireserviceService } from '../../fireservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;

  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, public router:Router,
    public fireService:FireserviceService,private navCtrl: NavController) { 
    
      this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}')]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnInit() {
  }
  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          alert('Welcome ');
        },(err: any) =>{
          console.log(err);
        });
      }
    },(err: any) =>{
      alert(err.message)
      console.log(err);
    })
    this.navCtrl.navigateForward('to-do');
  }


  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      
    } else {
      console.log(this.ionicForm.value)
    }
  }
  goToRegister(){
this.navCtrl.navigateForward('registry');
  }
}