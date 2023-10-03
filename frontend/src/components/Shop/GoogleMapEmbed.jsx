import React from 'react';

function GoogleMapEmbed() {
  return (
    <div>
      <header>
        <h1>Collecting Points</h1>
      </header>
      <main>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1gQpPfIGnNcn9vQbnD99bGzAzue9U8Jo&ehbc=2E312F"
          width="640"
          height="480"
          title="Embedded Google Map"
        ></iframe>
      </main>
    </div>
  );
}

export default GoogleMapEmbed;
