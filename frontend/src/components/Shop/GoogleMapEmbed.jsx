import React from 'react';

function GoogleMapEmbed() {
  return (
    <div className="map-container">
      <header className="header">
        <h1 className="title">Collecting Points</h1>
      </header>
      <main className="main">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1gQpPfIGnNcn9vQbnD99bGzAzue9U8Jo&ehbc=2E312F"
          width="100%"
          height="600"
          title="Embedded Google Map"
        ></iframe>
      </main>
      <style>
        {`
          .map-container {
            
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
          }

          .header {
            background-color: green;
            padding: 20px;
            text-align: center;
          }

          .title {
            font-size: 24px;
            color: white;
          }

          .main {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default GoogleMapEmbed;
