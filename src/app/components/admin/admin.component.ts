import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminBodyComponent } from '../admin-body/admin-body.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarModule, RouterLink, RouterOutlet, AdminSidebarComponent, AdminBodyComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
