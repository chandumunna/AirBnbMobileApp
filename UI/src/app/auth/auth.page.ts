import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;
  allowLogin = false;

  constructor(private authService: AuthServiceService,
              private route: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  OnLogin(){
    this.isLoading = true;
    this.authService.login();

    this.loadingCtrl.create({keyboardClose: true, message: 'Logging In'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading= false,
        loadingEl.dismiss();
        this.route.navigateByUrl('/places')
      }, 3000)

      this.route.navigateByUrl('/places');
    });
  }  

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }else{
      const email = form.value.email;
      this.allowLogin = true;
      if(this.isLogin){

      }else{

      }
    }
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }
}
