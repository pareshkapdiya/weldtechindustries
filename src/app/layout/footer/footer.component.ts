import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  productList: any[] = [
    {
      id: 1,
      name: 'Welded Wire Mesh',
      imagepath: 'gi-wire-mesh-500x500.jpg',
      routeName: 'welded-wire-mesh',
      subproducts: [
        { name: 'Mild steel' },
        { name: 'Galvanized iron welded wire mesh' },
        { name: 'Stainless steel welded wire mesh' },
      ]
    },
    {
      id: 2,
      name: 'Wire Mesh',
      imagepath: 'gi-wire-mesh_3_2_1.jpg',
      routeName: 'wire-mesh',
      subproducts: [
        { name: 'Galvanized wire mesh' },
        { name: 'Stainless steel wire mesh' },
        { name: 'Square wire mesh' }
      ]
    },
    {
      id: 3,
      name: 'Chain Link Fence',
      imagepath: 'Chain-Link-Blk-Vinyl-Coat_2.jpg',
      routeName: 'chain-link-fence',
      subproducts: [
        { name: 'Galvanized chain link fencing' },
        { name: 'PVC G.I. Chain link fencing' }
      ]
    },
    {
      id: 4,
      name: 'Crimped Wire Mesh',
      imagepath: 'crimped-wire-mesh-500x500-500x500.jpg',
      routeName: 'crimped-wire-mesh',
      subproducts: [
        { name: 'Galvanized crimped wire mesh' },
        { name: 'Hot dip galvanized' },
        { name: 'Electroplated galvanized' },
        { name: 'Stainless steel' }
      ]
    },
    {
      id: 5,
      name: 'Barbed Wire Mesh',
      imagepath: 'hot-dipped-galvanized-barbed-wire.jpg',
      routeName: 'barbed-wire-mesh',
      subproducts: [
        { name: 'Galvanized barbed wire' },
        { name: 'Hot dip galvanized barbed wire' },
        { name: 'Electro plated galvanized barbed wire' },
        { name: 'PVC Barbed wire' }
      ]
    },
    {
      id: 6,
      name: 'Concertina Coils',
      imagepath: 'Concertina-Razor-Coil.jpg',
      routeName: 'concertina-coils',
      subproducts: [
        { name: 'Galvanized concertina coil' },
        { name: 'Hot dip galvanized concertina coils' },
        { name: 'Electroplated galvanized concertina coils' }
      ]
    },
    {
      id: 7,
      name: 'Hexagonal Wire Mesh',
      imagepath: 'HEXAGONAL-WIRE-MESH.jpg',
      routeName: 'hexagonal-wire-mesh',
      subproducts: []
    },
    {
      id: 8,
      name: 'Gabions',
      imagepath: 'Gabion_Box.jpg',
      routeName: 'gabions',
      subproducts: []
    },
    {
      id: 9,
      name: 'Wire',
      imagepath: 'hhb-wire-500x500.jpg',
      routeName: 'wire',
      subproducts: [
        { name: 'Mild & Stainless steel wire' },
        { name: 'Galvanized & Hot dip galvanized wire' },
        { name: 'Electroplated wire' },
        { name: 'PVC Coated galvanized wire' }
      ]
    },
    // {
    //   id: 10,
    //   name: 'Expanded Metal Perforeted Sheet',
    //   imagepath: 'expanded_metal2.jpg',
    //   routeName: 'expanded-metal-perforeted-sheet',
    //   subproducts: []
    // },
    // {
    //   id: 11,
    //   name: 'Binding Wire',
    //   imagepath: 'galvanized-binding-wire-1622576.jpg',
    //   routeName: 'binding-wire',
    //   subproducts: []
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
