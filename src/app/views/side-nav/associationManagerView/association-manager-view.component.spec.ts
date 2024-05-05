import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationManagerViewComponent } from './association-manager-view.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('AssociationManagerViewComponent', () => {
  let component: AssociationManagerViewComponent;
  let fixture: ComponentFixture<AssociationManagerViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
       imports: [AppModule],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
