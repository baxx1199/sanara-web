import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsServicesComponent } from './modal-details-services.component';

describe('ModalDetailsServicesComponent', () => {
  let component: ModalDetailsServicesComponent;
  let fixture: ComponentFixture<ModalDetailsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetailsServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
