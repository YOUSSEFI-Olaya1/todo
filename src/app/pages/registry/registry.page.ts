import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {NavController } from "@ionic/angular";
import { FireserviceService } from '../../fireservice.service';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {
email:any;
password:any;
name:any;
mobile:any;


  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,private navCtrl: NavController,public fireService:FireserviceService) {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      password: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })}

  ngOnInit() {}

  register(){
    this.fireService.signup({email:this.email,password:this.password,mobile:this.mobile,name:this.name}).then(res=>{
      if(res.user){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          mobile:this.mobile,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Account Created!');
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
    this.navCtrl.navigateForward('to-do');
  }
 





  getDate(e: Event) {
    let target = e.target as HTMLInputElement;
    if (target && target.value) {
      let date = new Date(target.value).toISOString().substring(0, 10);
      if (this.ionicForm) {
        // Utiliser la propriété ionicForm en toute sécurité
        this.ionicForm.get('dob')?.setValue(date, {
          onlyself: true
        });
      }
     
    }
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
  goToRLogin(){
    this.navCtrl.navigateForward('login');
  }
 
}

