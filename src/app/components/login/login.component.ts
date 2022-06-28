import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading: boolean = false;
  isError = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm()
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin'])
    }
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)])
    })
  }

  submit() {
    this.isLoading = true
    this.authService.login(this.form.value).subscribe(() => {
      this.router.navigate(['admin'])
      this.isLoading = true;
      this.isError = false;
    }, (err) => {
      this.isLoading = false
      this.isError = true;
    })
  }

}
