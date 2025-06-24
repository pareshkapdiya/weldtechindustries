import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { WeldedWireMeshComponent } from './components/products/welded-wire-mesh/welded-wire-mesh.component';
import { WireMeshComponent } from './components/products/wire-mesh/wire-mesh.component';
import { ChainLinkFenceComponent } from './components/products/chain-link-fence/chain-link-fence.component';
import { CrimpedWireMeshComponent } from './components/products/crimped-wire-mesh/crimped-wire-mesh.component';
import { BarbedWireMeshComponent } from './components/products/barbed-wire-mesh/barbed-wire-mesh.component';
import { ConcertinaCoilsComponent } from './components/products/concertina-coils/concertina-coils.component';
import { HexagonalWireMeshComponent } from './components/products/hexagonal-wire-mesh/hexagonal-wire-mesh.component';
import { GabionsComponent } from './components/products/gabions/gabions.component';
import { ExpandedMetalPerforetedSheetComponent } from './components/products/expanded-metal-perforeted-sheet/expanded-metal-perforeted-sheet.component';
import { WireComponent } from './components/products/wire/wire.component';
import { BindingWireComponent } from './components/products/binding-wire/binding-wire.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
// Routes
import { PagesRoutes as routes } from './pages.routes';

//Module
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    ErrorComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    WeldedWireMeshComponent,
    WireMeshComponent,
    ChainLinkFenceComponent,
    CrimpedWireMeshComponent,
    BarbedWireMeshComponent,
    ConcertinaCoilsComponent,
    HexagonalWireMeshComponent,
    GabionsComponent,
    ExpandedMetalPerforetedSheetComponent,
    WireComponent,
    BindingWireComponent,
    ContactUsComponent,
    EnquiryComponent
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxCaptchaModule
  ],
  providers: [ContactService]
})
export class PagesModule { }
