import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productList: any[] = [
    {
      id: 1,
      name: 'Welded Wire Mesh',
      routename: 'welded-wire-mesh'
    },
    {
      id: 2,
      name: 'Wire Mesh',
      routename: 'wire-mesh'
    },
    {
      id: 3,
      name: 'Chain Link Fence',
      routename: 'chain-link-fence'
    },
    {
      id: 4,
      name: 'Crimped Wire Mesh',
      routename: 'crimped-wire-mesh'
    },
    {
      id: 5,
      name: 'Barbed Wire Mesh',
      routename: 'barbed-wire-mesh'
    },
    {
      id: 6,
      name: 'Concertina Coils',
      routename: 'concertina-coils'
    },
    {
      id: 7,
      name: 'Hexagonal Wire Mesh',
      routename: 'hexagonal-wire-mesh'
    },
    {
      id: 8,
      name: 'Gabions',
      routename: 'gabions'
    },
    {
      id: 9,
      name: 'Wire',
      routename: 'wire'
    },
    {
      id: 10,
      name: 'Expanded Metal & Perforeted Sheet',
      routename: 'expanded-metal-perforeted-sheet'
    },
    {
      id: 11,
      name: 'Binding Wire',
      routename: 'binding-wire'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
