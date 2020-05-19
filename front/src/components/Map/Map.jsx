import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import CircusTentIcon from "./../../images/circusTentIcon.png";
import L from "leaflet";

const circusIcon = L.icon({
  iconUrl: CircusTentIcon,
  iconSize: [50, 80],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

export default class CircusMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.5958,
      lng: 17.8443,
      zoom: 12,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{
          height: "400px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={circusIcon}>
          <Popup>
            <h2>Wild Circus</h2>
            <p>Neverland, 1818 Tomorrow Street 666.</p>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
