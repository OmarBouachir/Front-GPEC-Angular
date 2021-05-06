import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/http/auth.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string = null ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authService : AuthService ,
              private spinnerService: SpinnerService ,
			  private snackbarService: SnackbarService 
               ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    this.spinnerService.activate();
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      response => {
          this.authService.saveAuthData(response.jwt, response.id ,response.role);
          this.router.navigate(['/main']);
        this.spinnerService.deactivate();
      },
      err => {
        this.spinnerService.deactivate();
        this.snackbarService.openSnackBar('Erreur : Check your username and password' , 'red-snackbar')
      });
  }
}
