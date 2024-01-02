import { Grid } from "@mui/material";
import EarthquakeItem from "./EarthquakeItem";

export default function EarthquakeItems({
  selectedSize,
  earthquakes = [],
  getSizeColor = () => "white",
}) {
  return (
    <>
      {!earthquakes.length && (
        <h2 style={{ textAlign: "center" }}>
          No {selectedSize} earthquakes found
        </h2>
      )}
      <Grid container spacing={4} sx={{ py: "5%" }}>
        {earthquakes.map(
          ({ latitude, longitude, timestamp, size, humanReadableLocation }) => {
            const color = getSizeColor(size);
            const props = {
              latitude,
              longitude,
              timestamp,
              size,
              humanReadableLocation,
              color,
            };
            return <EarthquakeItem {...props} key={timestamp} />;
          }
        )}
      </Grid>
    </>
  );
}
