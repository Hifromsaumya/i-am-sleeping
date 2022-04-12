import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warningalert.component.html',
    // styleUrls: ['./warningalert.component.css'],
    styles: [`
    .warning-msg {
        background-color: #FEEFB3;
        color: #9F6000;
    }
    html {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-weight: 300;
        margin: 25px;
    }    
    body {
        width: 640px;
    }
    `],
})
export class WarningAlertComponent{
    
}