import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavAssociationmanagerviewContent1CaseViewComponent } from './side-nav-associationmanagerview-content1-case-view.component';
import {
    CaseHeaderService,
    ConfigurationService,
    MaterialModule,
    NAE_TAB_DATA,
    AuthenticationMethodService,
    MockAuthenticationMethodService,
    OverflowService,
    NAE_VIEW_ID_SEGMENT
} from '@netgrif/components-core';
import {
    HeaderComponentModule
} from '@netgrif/components';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SideNavAssociationmanagerviewContent1CaseViewComponent', () => {
    let component: SideNavAssociationmanagerviewContent1CaseViewComponent;
    let fixture: ComponentFixture<SideNavAssociationmanagerviewContent1CaseViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                HttpClientTestingModule,
                HeaderComponentModule,
                BrowserAnimationsModule
            ],
            providers: [
                {provide: AuthenticationMethodService, useClass: MockAuthenticationMethodService},
                {provide: NAE_TAB_DATA, useValue: {tabViewComponent: undefined, tabViewOrder: 1}},
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
                {provide: NAE_VIEW_ID_SEGMENT, useValue: 'case'},
                CaseHeaderService,
                OverflowService,
                ],
            declarations: [SideNavAssociationmanagerviewContent1CaseViewComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavAssociationmanagerviewContent1CaseViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
