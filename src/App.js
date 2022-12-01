
import Map from './Map'

function App() {
  const key = 'yourKey'

  return (
    <div className="">
          <header>
            Map Demo
          </header>
          <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

    </div>
  );
}

export default App;

