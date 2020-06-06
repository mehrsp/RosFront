import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MessageService } from 'primeng/api';

import { ScrollPanelModule } from 'primeng/scrollpanel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent, AppSubMenuComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlankComponent } from './features/blank/blank.component';

import { AccountModule } from './features/account/account.module';
import { HssLayoutComponent } from './layout/hss-layout/hss-layout.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ScrollPanelModule,

        AccountModule,
        ToastModule
    ],
    declarations: [
        AppComponent,
        TopbarComponent,
        SidebarComponent,
        AppSubMenuComponent,
        FooterComponent,

        BlankComponent,

        HssLayoutComponent,
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
