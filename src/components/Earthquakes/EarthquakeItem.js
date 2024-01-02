import { Box, Grid, Typography } from "@mui/material";
import MapComponent from "components/MapComponent/MapComponent";
import { getLocationNameFromReadableLocation, parseTimestamp } from "services";

export default function EarthquakeItem({
  timestamp,
  humanReadableLocation,
  latitude,
  longitude,
  size,
  color,
}) {
  const getParsedTimestamp = () => parseTimestamp(timestamp);

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} textAlign="center">
      <Box>
        <Typography variant="h5">
          {getLocationNameFromReadableLocation(humanReadableLocation)}
        </Typography>
        <MapComponent lat={latitude} lng={longitude}></MapComponent>
        <Box component="div" sx={{ borderLeft: `15px solid ${color}` }}>
          <Typography variant="body1">
            Time:{" "}
            <span style={{ fontWeight: "bold" }}>{getParsedTimestamp()}</span>
          </Typography>
          <Typography variant="body1">
            Size: <span style={{ fontWeight: "bold" }}>{size}</span>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
