import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';

// Services
import { AuthorizationService } from '../../services/authorization.service';
import { NotificationService } from '../../services/notification.service';

// Models
import { SendAuthorizationData } from '../../models/send-authorization-data';

// Helpers

// RegExps
import { email, password } from '../../constants/reg-exps';

@Component({
  selector: 'authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private sendDataService: AuthorizationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(form: FormGroup): void {
    this.submitted = true;
    if (!form.valid) return;
    const data: SendAuthorizationData = form.value;
    console.log('---data---', data)

    this.sendDataService.send(data).subscribe((response) => {
      this.submitted = false;
      this.router.navigate(['/']);
      this.notificationService.showNotification('success');
    }, (error) => {
      this.notificationService.showNotification('error');
    });
  }

  private initForm() {
    const message: SendAuthorizationData = new SendAuthorizationData();
    this.form = this.formBuilder.group({
      password: this.formBuilder.control(message.password, { validators: [Validators.required, Validators.pattern(password)], updateOn: 'blur' }),
      email: this.formBuilder.control(message.email, { validators: [Validators.required, Validators.pattern(email)], updateOn: 'blur' })
    });
  }

}
