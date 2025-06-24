import { ErrorComponent } from './components/error/error.component';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
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
import {
  ExpandedMetalPerforetedSheetComponent
} from './components/products/expanded-metal-perforeted-sheet/expanded-metal-perforeted-sheet.component';
import { WireComponent } from './components/products/wire/wire.component';
import { BindingWireComponent } from './components/products/binding-wire/binding-wire.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

export const PagesRoutes = [
    {
      path: '',
      component: DefaultLayoutComponent,
      children: [
        { path: 'error', component: ErrorComponent },
        { path: '', component: HomeComponent},
        { path: 'home', component: HomeComponent},
        { path: 'about-us', component: AboutUsComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: 'enquiry', component: EnquiryComponent },
        { path: 'all-products', component: ProductsComponent },
        { path: 'products/welded-wire-mesh', component: WeldedWireMeshComponent },
        { path: 'products/wire-mesh', component: WireMeshComponent },
        { path: 'products/chain-link-fence', component: ChainLinkFenceComponent },
        { path: 'products/crimped-wire-mesh', component: CrimpedWireMeshComponent },
        { path: 'products/barbed-wire-mesh', component: BarbedWireMeshComponent },
        { path: 'products/concertina-coils', component: ConcertinaCoilsComponent },
        { path: 'products/hexagonal-wire-mesh', component: HexagonalWireMeshComponent },
        { path: 'products/gabions', component: GabionsComponent },
        { path: 'products/expanded-metal-perforeted-sheet', component: ExpandedMetalPerforetedSheetComponent },
        { path: 'products/wire', component: WireComponent },
        { path: 'products/binding-wire', component: BindingWireComponent },
      ]
    }
  ];
