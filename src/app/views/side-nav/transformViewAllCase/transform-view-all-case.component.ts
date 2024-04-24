import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import { SideNavTransformviewallcaseContent0TaskViewComponent } from './content/0/side-nav-transformviewallcase-content0-task-view.component';
import { SideNavTransformviewallcaseContent1CaseViewComponent } from './content/1/side-nav-transformviewallcase-content1-case-view.component';


@Component({
    selector: 'app-transform-view-all-case',
    templateUrl: './transform-view-all-case.component.html',
    styleUrls: ['./transform-view-all-case.component.scss'],
    providers: [
        {   provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'transformViewAllCase'},
        ViewIdService,
    ]
})
export class TransformViewAllCaseComponent {

    tabs = [
        {
            label: {
                icon: 'storage',
                text: 'All Cases',
            },
            canBeClosed: false,
            tabContentComponent: SideNavTransformviewallcaseContent1CaseViewComponent,
            order: -1,
            injectedObject: {
                tabViewComponent: SideNavTransformviewallcaseContent0TaskViewComponent,
                tabViewOrder: 0
            }
        },
    ];

}
