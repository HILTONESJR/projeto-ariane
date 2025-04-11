import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkServiceComponent } from './work-service.component';

describe('WorkServiceComponent', () => {
  let component: WorkServiceComponent;
  let fixture: ComponentFixture<WorkServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
