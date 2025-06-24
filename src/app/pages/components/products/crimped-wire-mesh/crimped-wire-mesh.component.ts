import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare function initOwlCarousel(): any;
declare function initMagnificPopup(): any;

@Component({
  selector: 'app-crimped-wire-mesh',
  templateUrl: './crimped-wire-mesh.component.html',
  styleUrls: ['./crimped-wire-mesh.component.scss']
})
export class CrimpedWireMeshComponent implements OnInit, AfterViewInit {

  crimpedWireMeshDetails = [
    {id: 1, Size: '1 X 1 X 10 Swg (30mm X 30mm)', ft: '4ft X 50ft', weight: '60kg'},
    {id: 2, Size: '1 X 1 X 12 Swg (30mm X 30mm)', ft: '4ft X 50ft', weight: '47kg'},
    {id: 3, Size: '1 X 1 X 12[light] Swg (30mm X 30mm)', ft: '4ft X 50ft', weight: '43kg'},
    {id: 4, Size: '1 X 1 X 14 Swg (25mm X 25mm)', ft: '4ft X 50ft', weight: '37kg'},
    {id: 5, Size: '3/4 X 3/4 X 12Swg (23mm X 23mm)', ft: '4ft X 50ft', weight: '63kg'},
    {id: 6, Size: '3/4 X 3/4 X 12Swg[light](23mm X 23mm)', ft: '4ft X 50ft', weight: '56kg'},
    {id: 7, Size: '3/4 X 3/4 X 14Swg(23mm X 23mm)', ft: '4ft X 50ft', weight: '43kg'},
    {id: 8, Size: '5/8 X 5/8 X 14Swg(18mm X 18mm)', ft: '4ft X 50ft', weight: '51kg'},
    {id: 9, Size: '1/2 X 1/2 X 14(16mm X 16mm)', ft: '4ft X 50ft', weight: '56kg'},
    {id: 10, Size: '1/2 X 1/2 X 16(16mm X 16mm)', ft: '4ft X 50ft', weight: '40kg'},
    {id: 11, Size: '1/2 X 1/2 X 14(12mm X 12mm)', ft: '4ft X 50ft', weight: '73kg'},
    {id: 12, Size: '1/2 X 1/2 X 16 Swg(12mm X 12mm)', ft: '4ft X 50ft', weight: '-'},
    {id: 13, Size: '3/8 X 3/8 X 14(10mm X 10mm)', ft: '4ft X 50ft', weight: '90kg'},
    {id: 14, Size: '3/8 X 3/8 X 16(10mm X 10mm))', ft: '4ft X 50ft', weight: '50kg'},
    {id: 15, Size: '8mm X 8mm X 14', ft: '4ft X 50ft', weight: '96kg'},
  ];

  constructor(private titleService: Title, private meta: Meta) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.setHeader(
      'We are a leading Manufacturer and Exporters of Stainless Wire Mesh, Barb Wire Fence, Stainless Welded Wire Mesh, ' +
      'Chain Link Fences, Wire Mesh Fence, Gabion, Razor Wire, Security Fencing System, Vibrating Screens and related wire products.',
      'Weld Tech Industries',
      'Welcome to Weld Tech Industries'
    );
  }

  setHeader(desc: string, keywords: string, title: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({ name: 'og:description', content: desc });
  }

  ngAfterViewInit() {
    initOwlCarousel();
    initMagnificPopup();
  }

}
