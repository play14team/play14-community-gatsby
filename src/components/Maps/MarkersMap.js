import React, { useRef, useEffect } from "react";
import L from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { promiseToFlyTo, getCurrentLocation } from "./lib/map";
import Map from "./Map";

import gatsby_astronaut from "assets/images/logo.png";

const LOCATION = {
    lat: 38.9072,
    lng: -77.0369,
  };
  const CENTER = [LOCATION.lat, LOCATION.lng];
  const DEFAULT_ZOOM = 2;
  const ZOOM = 10;
  
  const timeToZoom = 2000;
  const timeToOpenPopupAfterZoom = 4000;
  const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;
  
  const popupContentHello = `<p>Hello 👋</p>`;
  const popupContentGatsby = `
    <div class="popup-gatsby">
      <div class="popup-gatsby-image">
        <img class="gatsby-astronaut" src=${gatsby_astronaut} />
      </div>
      <div class="popup-gatsby-content">
        <h1>Gatsby Leaflet Starter</h1>
        <p>Welcome to your new Gatsby site. Now go build something great!</p>
      </div>
    </div>
  `;
  
  /**
   * MapEffect
   * @description This is an example of creating an effect used to zoom in and set a popup on load
   */
  
  const MapEffect = ({ markerRef }) => {
    const map = useMap();
  
    useEffect(() => {
      if (!markerRef.current || !map) return;
  
      (async function run() {
        const popup = L.popup({
          maxWidth: 800,
        })
  
        const location = await getCurrentLocation().catch(() => LOCATION);
  
        const { current: marker } = markerRef || {};
  
        marker.setLatLng(location);
        popup.setLatLng(location);
        popup.setContent(popupContentHello);
  
        setTimeout(async () => {
          await promiseToFlyTo(map, {
            zoom: ZOOM,
            center: location,
          })
  
          marker.bindPopup(popup);
  
          setTimeout(() => marker.openPopup(), timeToOpenPopupAfterZoom);
          setTimeout(
            () => marker.setPopupContent(popupContentGatsby),
            timeToUpdatePopupAfterZoom
          );
        }, timeToZoom);
      })();
    }, [map, markerRef]);
  
    return null;
  }
  
  const IndexPage = () => {
    const markerRef = useRef();
  
    const mapSettings = {
      center: CENTER,
      defaultBaseMap: "OpenStreetMap",
      zoom: DEFAULT_ZOOM,
    }
  
    return (
        <Map {...mapSettings}>
          <MapEffect markerRef={markerRef} />
          <Marker ref={markerRef} position={CENTER} />
        </Map>
    )
  }
  
  export default IndexPage
  