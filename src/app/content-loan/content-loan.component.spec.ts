import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLoanComponent } from './content-loan.component';

describe('ContentLoanComponent', () => {
  let component: ContentLoanComponent;
  let fixture: ComponentFixture<ContentLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLoanComponent]
    });
    fixture = TestBed.createComponent(ContentLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
