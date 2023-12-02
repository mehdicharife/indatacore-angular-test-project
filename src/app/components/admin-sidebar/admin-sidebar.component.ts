import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item';
import { CommonModule } from '@angular/common';
import { navData } from './nav-data';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent implements OnInit {
  public navItems! : Array<NavItem>;

  ngOnInit() {
    this.navItems = navData;
  }


}
