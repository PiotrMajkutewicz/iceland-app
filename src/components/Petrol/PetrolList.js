import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PetrolItem from "./PetrolItem";
import { useState } from "react";

export default function PetrolList({ items = [], onItemClick = () => {} }) {
  const [fuelType, setFuelType] = useState("petrol");

  return (
    <Box
      component="div"
      sx={{
        pr: "2%",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "100%",
        overflowY: "auto",
      }}
    >
      <ToggleButtonGroup
        color="secondary"
        value={fuelType}
        exclusive
        onChange={(e) => {
          setFuelType(e.target.value);
        }}
        aria-label="Fuel Type"
      >
        <ToggleButton value="petrol">Petrol</ToggleButton>
        <ToggleButton value="diesel">Diesel</ToggleButton>
      </ToggleButtonGroup>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {items.map((item) => (
          <PetrolItem
            onItemClick={onItemClick}
            fuelType={fuelType}
            item={item}
            key={item.key}
          />
        ))}
      </Grid>
    </Box>
  );
}
