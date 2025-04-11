import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtConsultaComponent } from './bt-consulta.component';

describe('BtConsultaComponent', () => {
  let component: BtConsultaComponent;
  let fixture: ComponentFixture<BtConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
