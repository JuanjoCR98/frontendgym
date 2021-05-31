import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder,private irHacia:Router) { }
  
  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })

  mymap: any;

  ngOnInit(): void {
    this.mymap = L.map('mapid').setView([51.505, -0.09], 16)

    L.marker([51.5, -0.09]).addTo(this.mymap);

   const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    })

    tiles.addTo(this.mymap)
  }

  login(){
    
  }
}
