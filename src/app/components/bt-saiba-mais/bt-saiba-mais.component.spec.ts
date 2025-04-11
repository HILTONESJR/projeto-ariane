import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtSaibaMaisComponent } from './bt-saiba-mais.component';

describe('BtSaibaMaisComponent', () => {
  let component: BtSaibaMaisComponent;
  let fixture: ComponentFixture<BtSaibaMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtSaibaMaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtSaibaMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
