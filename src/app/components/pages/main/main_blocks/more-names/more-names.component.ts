import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-more-names',
    imports: [],
    templateUrl: './more-names.component.html',
    styleUrl: './more-names.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreNamesComponent {}
