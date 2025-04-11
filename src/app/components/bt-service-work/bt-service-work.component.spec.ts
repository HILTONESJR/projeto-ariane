import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtServiceWorkComponent } from './bt-service-work.component';

describe('BtServiceWorkComponent', () => {
  let component: BtServiceWorkComponent;
  let fixture: ComponentFixture<BtServiceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtServiceWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtServiceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
