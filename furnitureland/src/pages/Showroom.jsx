import React, { useState } from 'react';
import './Showroom.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Showroom = () => {
  const locations = [
    {
      name: 'Tripureshwor, Kathmandu, Head Office',
      phone: '9851240016',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4492147974477!2d85.31003831506287!3d27.698325482795412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197c2eeb676b%3A0xd73b8b623bd5ac09!2sTripureshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1622476241868!5m2!1sen!2snp'
    },
    {
      name: 'Maitighar, Kathmandu',
      phone: '01-4266372',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.377312883024!2d85.32152731506298!3d27.70050168279471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19748f9e8851%3A0x340af0c1f9b0e6d!2sMaitighar%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1622476290027!5m2!1sen!2snp'
    },
    {
      name: 'Maharajgunj, Bhatbhateni',
      phone: '01-4016277',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.648554373713!2d85.33171281506339!3d27.723935082785315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e9e658adb%3A0x5b5b5b5b5b5b5b5b!2sBhatbhateni%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1622476342314!5m2!1sen!2snp'
    },
    {
      name: 'Pokhara, Bhatbhateni',
      phone: '9804172890',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.377312883024!2d83.98553051506298!3d28.20970068279471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995938fd4e5eeb9%3A0x340af0c1f9b0e6d!2sBhatbhateni%2C%20Pokhara%2C%20Nepal!5e0!3m2!1sen!2snp!4v1622476290027!5m2!1sen!2snp'
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0].map);

  const handleLocationClick = (mapUrl) => {
    setSelectedLocation(mapUrl);
  };

  return (
    <>
      <Header />
      <section className='section-showroom'>
        <h1>Store Locations</h1>
        <div className="showroom-address">
          <div className="location">
            {locations.map((location, index) => (
              <div
                key={index}
                className='location-box'
                onClick={() => handleLocationClick(location.map)}
              >
                <p className='add-showroompage'>{location.name}</p>
                <p className='add-showroompage'>{location.phone}</p>
              </div>
            ))}
          </div>
          <div className="maps-store">
            <iframe
              src={selectedLocation}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Showroom;
