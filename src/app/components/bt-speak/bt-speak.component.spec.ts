import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtSpeakComponent } from './bt-speak.component';

describe('BtSpeakComponent', () => {
  let component: BtSpeakComponent;
  let fixture: ComponentFixture<BtSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtSpeakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
