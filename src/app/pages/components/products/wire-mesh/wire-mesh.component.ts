import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare function initOwlCarousel(): any;
declare function initMagnificPopup(): any;

@Component({
  selector: 'app-wire-mesh',
  templateUrl: './wire-mesh.component.html',
  styleUrls: ['./wire-mesh.component.scss']
})
export class WireMeshComponent implements OnInit, AfterViewInit {

  wireMeshDetails = [
    { id: 1, rollSize: '3 X 18 X 90', weight: '19.00 KG' },
    { id: 2, rollSize: '3 X 18 X 90[LIGHT]', weight: '17.00 KG' },
    { id: 3, rollSize: '4 X 18 X 90', weight: '23.00 KG' },
    { id: 4, rollSize: '4 X 18 X 90[LIGHT]', weight: '19.50 KG' },
    { id: 5, rollSize: '5 X 18 X 90', weight: '29.00 KG' },
    { id: 6, rollSize: '5 X 18 X 90[LIGHT]', weight: '23.50 KG' },
    { id: 7, rollSize: '6 X 18 X 90', weight: '35.50 KG' },
    { id: 8, rollSize: '6 X 18 X 90[LIGHT]', weight: '30.00 KG' },
    { id: 9, rollSize: '4 X 20 X 90', weight: '14.50 KG' },
    { id: 10, rollSize: '5 X 20 X 90', weight: '18.00 KG' },
    { id: 11, rollSize: '5 X 20 X 90[LIGHT]', weight: '14.00 KG' },
    { id: 12, rollSize: '6 X 20 X 90', weight: '22.50 KG' },
    { id: 13, rollSize: '6 X 20 X 90[LIGHT]', weight: '19.00 KG' },
    { id: 14, rollSize: '7 X 20 X 90', weight: '27.00 KG' },
    { id: 15, rollSize: '7 X 20 X 90[LIGHT]', weight: '21.00 KG' },
    { id: 16, rollSize: '8 X 20 X 90', weight: '30.50 KG' },
    { id: 17, rollSize: '8 X 20 X 90', weight: '24.00 KG' },
    { id: 18, rollSize: '10 X 20 X 90', weight: '40.00 KG' },
    { id: 19, rollSize: '10 X 20 X 90[LIGHT]', weight: '30.00 KG' },
    { id: 20, rollSize: '5 X 22 X 90', weight: '11.00 KG' },
    { id: 21, rollSize: '6 X 22 X 90', weight: '13.50 KG' },
    { id: 22, rollSize: '7 X 22 X 90', weight: '15.50 KG' },
    { id: 23, rollSize: '7 X 22 X 90[LIGHT]', weight: '13.50 KG' },
    { id: 24, rollSize: '8 X 22 X 90', weight: '17.00 KG' },
    { id: 25, rollSize: '8 X 22 X 90[LIGHT]', weight: '14.00 KG' },
    { id: 26, rollSize: '10 X 22 X 90', weight: '20.50 KG' },
    { id: 27, rollSize: '12 X 22 X 90', weight: '25.50 KG' },
    { id: 28, rollSize: '8 X 24 X 90', weight: '11.00 KG' },
    { id: 28, rollSize: '8 X 24 X 90', weight: '11.00 KG' },
    { id: 29, rollSize: '10 X 24 X 90', weight: '13.50 KG' },
    { id: 30, rollSize: '11 X 24 X 90', weight: '15.50 KG' },
    { id: 31, rollSize: '12 X 24 X 90', weight: '17.00 KG' },
    { id: 32, rollSize: '14 X 24 X 90', weight: '19.00 KG' },
    { id: 33, rollSize: '15 X 24 X 90', weight: '20.50 KG' },
    { id: 34, rollSize: '16 X 24 X 90', weight: '21.00 KG' },
    { id: 35, rollSize: '20 X 24 X 90', weight: '30.00 KG' },
    { id: 36, rollSize: '8 X 26 X 90', weight: '09.00 KG' },
    { id: 37, rollSize: '10 X 26 X 90', weight: '10.50 KG' },
    { id: 38, rollSize: '11 X 26 X 90', weight: '11.50 KG' },
    { id: 39, rollSize: '12 X 26 X 90', weight: '12.50 KG' },
    { id: 40, rollSize: '14 X 26 X 90', weight: '14.50 KG' },
    { id: 41, rollSize: '15 X 26 X 90', weight: '15.50 KG' },
    { id: 42, rollSize: '16 X 26 X 90', weight: '17.50 KG' },
    { id: 43, rollSize: '18 X 26 X 90', weight: '19.00 KG' },
    { id: 44, rollSize: '20 X 26 X 90', weight: '22.00 KG' },
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











