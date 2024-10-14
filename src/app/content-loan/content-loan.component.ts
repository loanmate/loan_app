import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-loan',
  templateUrl: './content-loan.component.html',
  styleUrls: ['./content-loan.component.scss']
})
export class ContentLoanComponent {
  heading: string = '';
  content: string = '';
  loanType: string = '';
  imageLoc: string = '';
  eligibility: string[] = [];

  private definitions: { [key: string]: { heading: string; content: string; image: string; eligibility: string[] } } = {
    businessloan: {
      heading: 'Business Loan',
      content: 'Maximize your business expansion with our customized loan solutions! Take your business to new heights with hassle-free financing and accelerate your growth with flexible funding options. Secure the funds you need to scale effortlessly and achieve your goals with our competitive loan offers. Power your business vision with our fast and reliable loan services!',
      eligibility: [
        'Cibil score 700 above',
        'Gst returns not required',
        '2-3 years income tax returns mandatory'
      ],
      image: 'assets/images/businessloan.jpg'
    },
    personalloan: {
      heading: 'Personal Loan',
      content: 'Transform your dreams into reality with our personal loans, offering competitive interest rates to help you achieve your goals without breaking the bank. Enjoy fast approval and flexible terms tailored to fit your budget and needs. Unlock extra cash for what matters most and benefit from our attractive interest rates. Empower your life with easy access to funds whenever you need them, all with clear and affordable rates. Your personal loan is simple, fast, and transparent, keeping you in control every step of the way.',
      eligibility: [
        'Cibil score 700 above',
        'Salary 20k and above',
        'Starts for 10.5% interest'
      ],
      image: 'assets/images/personalloan.jpg'
    },
    startuploan: {
      heading: 'Startup Loan',
      content: 'Fuel your business dreams with our tailored startup loans, offering competitive interest rates designed to help you launch and grow, whether you\'re a manufacturer, trader, franchise owner, or young entrepreneur. Enjoy swift approval and flexible terms that cater to your success. Boost your business with extra capital and benefit from our favorable rates. Empower your journey with easy access to funds and clear, affordable interest rates. Your startup loan is simple, fast, and transparent, supporting your growth every step of the way.',
      eligibility: [
        'Any type of business',
        'Must be a viable project',
        'Franchise also applicable',
        'Only done with collateral'
      ],
      image: 'assets/images/startuploan.jpg'
    },
    odandcc: {
      heading: 'OD & CC',
      content: 'Manage your cash flow effortlessly with our tailored OD & CC loans, offering competitive interest rates to maintain liquidity without financial strain. Secure swift approval and flexible terms designed for seamless cash flow management. Boost your financial flexibility with extra liquidity and benefit from our favorable rates. Empower your business operations with easy access to OD & CC funds, all at clear, affordable interest rates. Your OD & CC loan is simple, fast, and transparent, providing the support you need for growth and cash flow management.',
      eligibility: [
        'OD & CC in national banks for traders and manufactures',
        'Mortgage loans for freelancers with or without IT returns',
        'Mortgage loans for unapproved properties, sheet and passage houses'
      ],
      image: 'assets/images/odandcc.jpg'
    },
    educationalloan: {
      heading: 'Educational Loan',
      content: 'Turn your educational dreams into reality with our tailored Educational Loans, offering competitive interest rates and flexible repayment options to support your academic journey. Experience swift approval and student-friendly terms designed to make higher education more accessible and affordable. With our Educational Loan, you can focus on your studies while we take care of the financing. Whether you\'re planning to pursue studies in India or abroad, benefit from clear, affordable interest rates and seamless loan disbursement. Empower your future with the financial support you need for tuition, living expenses, and more – your Educational Loan is fast, simple, and designed for your success.',
      eligibility: [
        'Should have good academic record',
        'Applicant should have confirmed admission to a recognized educational institution'
      ],
      image: 'assets/images/education.jpg'
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const loan = params.get('loan');
      if (loan && this.definitions[loan]) {
        this.loanType = loan;
        this.heading = this.definitions[loan].heading;
        this.content = this.definitions[loan].content;
        this.eligibility = this.definitions[loan].eligibility;
        this.imageLoc = this.definitions[loan].image;
      }
    });
  }

  routePage() {
    this.router.navigate(['/loan-form', this.loanType]);
  }
}
