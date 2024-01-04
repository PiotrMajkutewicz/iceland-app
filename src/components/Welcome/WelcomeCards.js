import { Stack } from "@mui/material";
import WelcomeCardItem from "./WelcomeCardItem";

export default function WelcomeCards() {
  const items = [
    {
      name: "Licence Plates",
      to: "/licence-plates",
      iconName: "DirectionsCarOutlined",
    },
    { name: "Earthquakes", to: "/earthquakes", iconName: "PublicOutlined" },
    { name: "Petrol", to: "/petrol", iconName: "LocalGasStationOutlined" },
  ];

  const getColors = (isOdd) => ({
    backgroundColor: isOdd ? "#1976d2" : "#f5f5f5",
    color: isOdd ? "#f5f5f5" : "#1976d2",
  });

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={4}
      justifyContent="center"
      useFlexGap
      maxWidth={585}
      paddingTop="30px"
    >
      {items.map(({ name, to, iconName }, index) => {
        const isOdd = index % 2 === 0;
        const colors = getColors(isOdd);
        return (
          <WelcomeCardItem
            key={name}
            name={name}
            to={to}
            colors={colors}
            iconName={iconName}
          />
        );
      })}
    </Stack>
  );
}
