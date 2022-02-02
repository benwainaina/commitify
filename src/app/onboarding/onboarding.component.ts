/**
 * onboarding component
 */

import { Component } from "@angular/core";

@Component({
    styleUrls: [
        'onboarding.component.scss'
    ],
    templateUrl: 'onboarding.component.html'
})
export class OnboardingComponent {
    /**
     * copyright year
     */
    public year: number = new Date().getUTCFullYear();

}
