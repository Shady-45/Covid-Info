import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CountriesMap, MarkerType } from '../type';
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';

import ClipLoader from "react-spinners/ClipLoader";

const Maps = () => {
    const customIcon = new Icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/128/535/535137.png',
        iconSize:[38,38]
    })
  const mapQuery = useQuery({
    queryKey: ['maps'],
    queryFn: async () => {
      const data = await fetch('https://run.mocky.io/v3/21287254-88e1-40c0-af89-aebe709a313b');
      return data.json();
    },
  });

  const countriesInfo: CountriesMap[] = mapQuery?.data;

const markerPositions:MarkerType[] = mapQuery && mapQuery?.data && countriesInfo.map((item)=>({
    lat : item.countryInfo.lat,
    long:item.countryInfo.long,
    country:item.country,
    cases:item.cases,
    deaths:item.deaths,
    recovered:item.recovered,
    img:item.countryInfo.flag
}))



  return (
    <div className='flex items-center justify-center h-[90vh] w-[90vw] m-auto '>
      {mapQuery && mapQuery?.data ? (
        <MapContainer
          style={{ width: '100%', height: '100vh' }} // Set a fixed height or aspect ratio
          center={[countriesInfo[0]?.countryInfo.lat, countriesInfo[0]?.countryInfo.long]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         {markerPositions.map((position, index) => (
          <Marker key={index} icon={customIcon} position={[position.lat, position.long]}>
            <Popup>
                <div className='flex items-center gap-2'>
                <p>{position.country}</p>
                <img className='h-4' src={position.img} alt={position.country} />
                </div>
        
         <p>Cases: {position.cases}</p>
         <p>Death: {position.deaths}</p>
         <p>Recovered: {position.recovered}</p>
            </Popup>
          </Marker>
        ))}
        </MapContainer>
      ) : (
       <div className='fixed inset-0 flex items-center justify-center'>
         <ClipLoader
        color='black'
        
        
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
       </div>
      )}
    </div>
  );
    

};

export default Maps;
