import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadComponent : () => import("./components/login/login.component").then(mod => mod.LoginComponent)
    },

    {
        path : 'login',
        loadComponent : () => import("./components/login/login.component").then(mod => mod.LoginComponent)
    },

    {
        path : 'register',
        loadComponent: () => import("./components/register/register.component").then(mod => mod.RegisterComponent)
    },

    {
        path : 'admin',
        children: [
            {path:'dashboard', loadComponent: () => import("./components/admin-dashboard/admin-dashboard.component").then(mod => mod.AdminDashboardComponent)},
            {path:'datatable', loadComponent: () => import("./components/data-table/data-table.component").then(mod => mod.DataTableComponent)}
        ],
        loadComponent : () => import("./components/admin/admin.component").then(mod => mod.AdminComponent)
    }
];
