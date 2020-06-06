import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HssLayoutComponent } from './layout/hss-layout/hss-layout.component';
import { AuthGuard } from './core/authentication/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: HssLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
            { path: 'messaging', loadChildren: './features/messaging/messaging.module#MessagingModule' },
            { path: 'notifications', loadChildren: './features/notification/notification.module#NotificationModule' },
            { path: 'product-categories', loadChildren: './features/product-category/product-category.module#ProductCategoryModule' },
            { path: 'products', loadChildren: './features/product/product.module#ProductModule' },
            { path: 'technicals', loadChildren: './features/technical/technical.module#TechnicalModule' },
            { path: 'brands', loadChildren: './features/brand/brand.module#BrandModule' },
            { path: 'suppliers', loadChildren: './features/supplier/supplier.module#SupplierModule' },
            { path: 'slides', loadChildren: './features/slides/slides.module#SlideShowModule' }
        ]
    },
    { path: '**', redirectTo: 'dashboard', canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
