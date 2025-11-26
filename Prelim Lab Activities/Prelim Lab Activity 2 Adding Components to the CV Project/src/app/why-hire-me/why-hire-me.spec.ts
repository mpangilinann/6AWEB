import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHireMe } from './why-hire-me';

describe('WhyHireMe', () => {
  let component: WhyHireMe;
  let fixture: ComponentFixture<WhyHireMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyHireMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyHireMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
