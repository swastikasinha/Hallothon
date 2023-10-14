import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAgRG-usXfwmTuw9yP0HSKcdy0mszlcWYw",
  });
  const center = useMemo(() => ({ lat: 12.9353971, lng: 77.5355179 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker position={{ lat: 12.9353971, lng: 77.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;