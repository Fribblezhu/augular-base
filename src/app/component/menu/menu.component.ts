import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    styleUrls: ['./menu.component.less'],
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    isCollapsed = false;
    ngOnInit(): void {
        // todo get the iconUrl form system
    }
    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}
