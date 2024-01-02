import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectForm({
  items,
  selectedSize,
  setSelectedSize = () => {},
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size"
          value={selectedSize}
          label="Size"
          onChange={(e) => {
            setSelectedSize(e.target.value);
          }}
        >
          {Object.entries(items).map(([value, { name }]) => {
            return (
              <MenuItem value={value} key={name}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
