import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent {
  loanGroup!: FormGroup;
  formFields: any[] = [];
  formType!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private emailService: EmailService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const loantype = params.get('formType');
      if(loantype) {
        this.formType = loantype;
        this.setupForm(loantype);
      }
    });
  }

  setupForm(formType: string): void {
    // Define form structure based on formType
    if (formType === 'businessloan' || formType === 'odandcc') {
      this.formFields = [
        { name: 'name', type: 'text', label: 'Name', validators: [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)] },
        { name: 'mobile', type: 'text', label: 'Mobile Number', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
        { name: 'email', type: 'email', label: 'Email', validators: [Validators.required, Validators.email] },
        { name: 'city', type: 'select', label: 'City', options: ['Chennai', 'Coimbatore'] },
        { name: 'cibilscore', type: 'number', label: 'Cibil Score', validators: [Validators.required, Validators.min(700)] },
        { name: 'companyname', type: 'text', label: 'Company Name', validators: [Validators.required] },
        { name: 'businesstype', type: 'select', label: 'Business Type', options: ['Manufacturing', 'Traders', 'Services'] },
        { name: 'businessyear', type: 'number', label: 'How long you are in business?', validators: [Validators.required, Validators.min(0)] },
        { name: 'turnover', type: 'number', label: 'Monthly business turnover', validators: [Validators.required] },
        { name: 'currentplans', type: 'radio', label: 'Any current ongoing loans?', options: ['Yes', 'No'], validators: [Validators.required] },
      ];
    } else if (formType === 'personalloan') {
      this.formFields = [
        { name: 'name', type: 'text', label: 'Name', validators: [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)] },
        { name: 'mobile', type: 'text', label: 'Mobile Number', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
        { name: 'email', type: 'email', label: 'Email', validators: [Validators.required, Validators.email] },
        { name: 'city', type: 'select', label: 'City', options: ['Chennai', 'Coimbatore'] },
        { name: 'cibilscore', type: 'number', label: 'Cibil Score', validators: [Validators.required, Validators.min(700)] },
        { name: 'companyname', type: 'text', label: 'Company Name', validators: [Validators.required] },
        { name: 'workingperiod', type: 'number', label: 'How long you are working in your company?', validators: [Validators.required, Validators.min(0)] },
        { name: 'salary', type: 'number', label: 'Monthly salary', validators: [Validators.required, Validators.min(20000)] },
        { name: 'currentplans', type: 'radio', label: 'Any current ongoing loans?', options: ['Yes', 'No'], validators: [Validators.required] },
      ];
    } else if (formType === 'startuploan') {
      this.formFields = [
        { name: 'name', type: 'text', label: 'Name', validators: [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)] },
        { name: 'mobile', type: 'text', label: 'Mobile Number', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
        { name: 'email', type: 'email', label: 'Email', validators: [Validators.required, Validators.email] },
        { name: 'city', type: 'select', label: 'City', options: ['Chennai', 'Coimbatore'] },
        { name: 'cibilscore', type: 'number', label: 'Cibil Score', validators: [Validators.required, Validators.min(700)] },
        { name: 'businesstype', type: 'select', label: 'Business Type', options: ['Manufacturing', 'Traders'] },
        { name: 'collateraloffered', type: 'radio', label: 'Collateral security offered?', options: ['Yes', 'No'], validators: [Validators.required] },
        { name: 'currentplans', type: 'radio', label: 'Any current ongoing loans?', options: ['Yes', 'No'], validators: [Validators.required] },
      ];
    } 

    this.buildForm();
  }

  buildForm(): void {
    this.loanGroup = this.fb.group({});

    this.formFields.forEach(field => {
      this.loanGroup.addControl(field.name, new FormControl('',field.validators || []));
    });
  }

  onSubmit(): void {
    const templateParams = {
      loanname: this.formType,
      ...this.loanGroup.value
    };

    this.emailService.sendEmail(templateParams)
      .then((response) => {
        this.snackbar.open("Email sent successfully!", 'Close', {
          duration: 3000,  // Snackbar will close after 3 seconds
          verticalPosition: 'top',
          panelClass: ['snackbar-success']
        });
        this.routeToHomepage();
      })
      .catch((error) => {
        this.snackbar.open("Fail to send mail", 'Close', {
          duration: 3000,  // Snackbar will close after 3 seconds
          verticalPosition: 'top',
          panelClass: ['snackbar-error']
        });
      });
  }

  routeToHomepage() {
    this.router.navigate(['/home']);
  }
}
