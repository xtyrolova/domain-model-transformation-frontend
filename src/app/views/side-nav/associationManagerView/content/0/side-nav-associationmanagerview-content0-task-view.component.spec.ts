import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavAssociationmanagerviewContent0TaskViewComponent } from './side-nav-associationmanagerview-content0-task-view.component';
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

describe('SideNavAssociationmanagerviewContent0TaskViewComponent', () => {
    let component: SideNavAssociationmanagerviewContent0TaskViewComponent;
    let fixture: ComponentFixture<SideNavAssociationmanagerviewContent0TaskViewComponent>;

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
            declarations: [SideNavAssociationmanagerviewContent0TaskViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavAssociationmanagerviewContent0TaskViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
