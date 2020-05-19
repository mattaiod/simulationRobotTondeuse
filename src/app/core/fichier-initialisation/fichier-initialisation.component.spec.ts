import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierInitialisationComponent } from './fichier-initialisation.component';

describe('FichierInitialisationComponent', () => {
  let component: FichierInitialisationComponent;
  let fixture: ComponentFixture<FichierInitialisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichierInitialisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierInitialisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
