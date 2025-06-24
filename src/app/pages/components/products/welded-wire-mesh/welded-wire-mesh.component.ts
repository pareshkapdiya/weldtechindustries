import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare function initOwlCarousel(): any;
declare function initMagnificPopup(): any;

@Component({
  selector: 'app-welded-wire-mesh',
  templateUrl: './welded-wire-mesh.component.html',
  styleUrls: ['./welded-wire-mesh.component.scss']
})
export class WeldedWireMeshComponent implements OnInit, AfterViewInit {

  meshDetails = [
    { 'id': 1, 'meshSize': '15mm X 15mm', 'wireDiameter': '1.60mm', 'widthxLength': '3 X 50', 'weight': '27-28' },
    { 'id': 2, 'meshSize': '15mm X 15mm', 'wireDiameter': '1.60mm', 'widthxLength': '4 X 50', 'weight': '36-37' },
    { 'id': 3, 'meshSize': '20mm X 20mm', 'wireDiameter': '1.80mm', 'widthxLength': '3 X 50', 'weight': '29-30' },
    { 'id': 4, 'meshSize': '20mm X 20mm', 'wireDiameter': '1.80mm', 'widthxLength': '4 X 50', 'weight': '39-40' },
    { 'id': 5, 'meshSize': '25mm X 25mm', 'wireDiameter': '2.45mm', 'widthxLength': '3 X 50', 'weight': '38-39' },
    { 'id': 6, 'meshSize': '25mm X 25mm', 'wireDiameter': '2.45mm', 'widthxLength': '4 X 50', 'weight': '49-50' },
    { 'id': 7, 'meshSize': '25mm X 25mm', 'wireDiameter': '2.95mm', 'widthxLength': '3 X 50', 'weight': '54-55' },
    { 'id': 8, 'meshSize': '25mm X 25mm', 'wireDiameter': '2.90mm', 'widthxLength': '4 X 50', 'weight': '73-74' },
    { 'id': 9, 'meshSize': '25mm X 25mm', 'wireDiameter': '2.90mm', 'widthxLength': '5 X 50', 'weight': '90-91' },
    { 'id': 10, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.10mm', 'widthxLength': '3 X 50', 'weight': '22-23' },
    { 'id': 11, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.10mm', 'widthxLength': '4 X 50', 'weight': '30-31' },
    { 'id': 12, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.10mm', 'widthxLength': '5 X 50', 'weight': '38-39' },
    { 'id': 13, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.30mm', 'widthxLength': '3 X 50', 'weight': '27-28' },
    { 'id': 14, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.30mm', 'widthxLength': '4 X 50', 'weight': '36-37' },
    { 'id': 15, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.30mm', 'widthxLength': '5 X 50', 'weight': '45-46' },
    { 'id': 16, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.70mm', 'widthxLength': '3 X 50', 'weight': '37-38' },
    { 'id': 17, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.70mm', 'widthxLength': '4 X 50', 'weight': '49-50' },
    { 'id': 18, 'meshSize': '30mm X 30mm', 'wireDiameter': '2.70mm', 'widthxLength': '5 X 50', 'weight': '62-63' },
    { 'id': 19, 'meshSize': '50mm X 50mm', 'wireDiameter': '2.20mm', 'widthxLength': '4 X 100', 'weight': '43-44' },
    { 'id': 20, 'meshSize': '50mm X 50mm', 'wireDiameter': '2.20mm', 'widthxLength': '5 X 100', 'weight': '54-55' },
    { 'id': 21, 'meshSize': '50mm X 50mm', 'wireDiameter': '3.00mm', 'widthxLength': '4 X 100', 'weight': '76-77' },
    { 'id': 22, 'meshSize': '50mm X 50mm', 'wireDiameter': '3.00mm', 'widthxLength': '5 X 100', 'weight': '95-96' },
    { 'id': 23, 'meshSize': '65mm X 65mm', 'wireDiameter': '2.20mm', 'widthxLength': '4 X 100', 'weight': '37-38' },
    { 'id': 24, 'meshSize': '65mm X 65mm', 'wireDiameter': '2.20mm', 'widthxLength': '5 X 100', 'weight': '46-47' }
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

