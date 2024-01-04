import ReactiveMapComponent from "components/Map/ReactiveMapComponent";
import { useFetch } from "hooks";
import PetrolList from "./PetrolList";
import NotFound from "components/NotFound/NotFound";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { activeOnResize, deactiveOnResize } from "services";

export default function Petrol() {
  const { data, loading } = useFetch("http://apis.is/petrol");
  const [mapStatus, setMapStatus] = useState(true);

  const [station, setStation] = useState({});

  const defaultMapPoint = [64.9581587, -18.8554384];
  const [mapPoint, setMapPoint] = useState();

  const onItemClick = (item) => {
    setStation(item)
    setMapPoint(Object.values(item.geo));
  };

  const hideMap = ({ currentWidth }) => {
    setMapStatus((prevMapStatus) => {
      const isMobile = currentWidth < 720;

      if (isMobile && prevMapStatus) return false;
      else if (!isMobile && !prevMapStatus) return true;

      return prevMapStatus;
    });
  };

  useEffect(() => {
    activeOnResize(hideMap);

    return () => deactiveOnResize(hideMap);
  }, []);

  return (
    <>
      {!loading && !data.results?.length && (
        <NotFound message="Petrol couldn't be found" />
      )}
      {!loading && (
        <Box component="div" sx={{ height: "100%", display: "flex" }}>
          <PetrolList onItemClick={onItemClick} items={data.results} />
          <ReactiveMapComponent
            mapStatus={mapStatus}
            center={mapPoint?.length ? mapPoint : defaultMapPoint}
            marker={mapPoint}
            station={station}
          ></ReactiveMapComponent>
        </Box>
      )}
    </>
  );
}
