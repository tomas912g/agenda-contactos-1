import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterPage } from './resgister-page';

describe('ResgisterPage', () => {
  let component: ResgisterPage;
  let fixture: ComponentFixture<ResgisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgisterPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
