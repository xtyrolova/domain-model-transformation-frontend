import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import { SideNavAssociationmanagerviewContent0TaskViewComponent } from './content/0/side-nav-associationmanagerview-content0-task-view.component';
import { SideNavAssociationmanagerviewContent1CaseViewComponent } from './content/1/side-nav-associationmanagerview-content1-case-view.component';


@Component({
    selector: 'app-association-manager-view',
    templateUrl: './association-manager-view.component.html',
    styleUrls: ['./association-manager-view.component.scss'],
    providers: [
        {   provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'associationManagerView'},
        ViewIdService,
    ]
})
export class AssociationManagerViewComponent {

    tabs = [
        {
            label: {
                icon: 'storage',
                text: 'All Cases',
            },
            canBeClosed: false,
            tabContentComponent: SideNavAssociationmanagerviewContent1CaseViewComponent,
            order: -1,
            injectedObject: {
                tabViewComponent: SideNavAssociationmanagerviewContent0TaskViewComponent,
                tabViewOrder: 0
            }
        },
    ];

}
