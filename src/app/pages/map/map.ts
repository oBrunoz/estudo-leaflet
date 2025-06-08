import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MapLayout } from "../../components/map-layout/map-layout";

@Component({
  selector: 'app-map',
  imports: [MapLayout],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map {
    private map!: L.Map;
    markers: L.Marker[] = [
      L.marker([-15.793889, -47.882778]),
    ];
  
    constructor() {}
  
    ngOnInit() {}
  
    ngAfterViewInit() { 
      this.initMap();
      this.centerMap();
    }
  
    private initMap() {
      const baseLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      this.map = L.map('map');
      L.tileLayer(baseLayer).addTo(this.map);
    }
  
     private centerMap() {
      // Create a boundary based on the markers
      const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));

      // Fit the map into the boundary
      this.map.fitBounds(bounds);
    }
}
