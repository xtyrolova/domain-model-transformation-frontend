import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavTransformviewallcaseContent0TaskViewComponent } from './side-nav-transformviewallcase-content0-task-view.component';
import {
    MaterialModule,
    ConfigurationService,
    AuthenticationMethodService,
    NAE_TAB_DATA,
    SimpleFilter,
    FilterType
} from '@netgrif/components-core';
import {
    HeaderComponentModule,
    PanelComponentModule,
} from '@netgrif/components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

describe('SideNavTransformviewallcaseContent0TaskViewComponent', () => {
    let component: SideNavTransformviewallcaseContent0TaskViewComponent;
    let fixture: ComponentFixture<SideNavTransformviewallcaseContent0TaskViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                HeaderComponentModule,
                PanelComponentModule,
                BrowserAnimationsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {provide: NAE_TAB_DATA, useValue: {baseFilter: new SimpleFilter('id', FilterType.TASK, {}), tabSelected$: new Observable()}},
                AuthenticationMethodService,
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService}
            ],
            declarations: [SideNavTransformviewallcaseContent0TaskViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavTransformviewallcaseContent0TaskViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
