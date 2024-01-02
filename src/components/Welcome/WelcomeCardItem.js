import {
  Card,
  CardActionArea,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getIcon } from "services/";
export default function WelcomeCardItem({
  name,
  to,
  iconName,
  colors: { color = "#000", backgroundColor = "#fff" },
}) {
  const IconComponent = getIcon(iconName);

  return (
    <Card sx={{ width: 150, height: 150 }} style={{ backgroundColor, color }}>
      <CardActionArea
        LinkComponent={Link}
        to={to}
        sx={{ height: "100%", width: "100%" }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Icon fontSize="large">
            <IconComponent fontSize="large" />
          </Icon>
          <Typography variant="body2">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
