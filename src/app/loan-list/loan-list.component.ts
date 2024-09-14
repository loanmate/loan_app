import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  cards = [
    { header: 'Business Loan', footer: 'Fuel Your Growth, Fund Your Success – Get the Business Loan You Deserve!', route: 'businessloan', image: 'assets/images/business.png' },
    { header: 'Personal Loan', footer: 'Your Dreams, Your Way – Secure the Funds with a Personal Loan Today', route: 'personalloan', image: 'assets/images/personal.png' },
    { header: 'Startup Loan', footer: 'Start Big, Dream Bigger – Launch Your Vision with Our Startup Loan!', route: 'startuploan', image: 'assets/images/startup.png' },
    { header: 'OD & CC', footer: 'Flexibility at Your Fingertips – Manage Your Cash Flow with OD & CC!', route: 'odandcc', image: 'assets/images/odandcc.png' }
  ];

  cols: number = 2; // Default to 2 columns

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 1; // Switch to 1 column on mobile
        } else {
          this.cols = 2; // Switch back to 2 columns on larger screens
        }
      });
  }

  routePage(loanname: string) {
    this.router.navigate(['/loan-content', loanname]);
  }
}
