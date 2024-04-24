import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransformViewAllCaseComponent } from './transform-view-all-case.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('TransformViewAllCaseComponent', () => {
  let component: TransformViewAllCaseComponent;
  let fixture: ComponentFixture<TransformViewAllCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
       imports: [AppModule],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformViewAllCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
