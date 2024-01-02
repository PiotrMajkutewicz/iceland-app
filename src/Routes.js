import Earthquakes from "components/Earthquakes/Earthquakes";
import LicencePlates from "components/LicencePlates/LicencePlates";
import Welcome from "components/Welcome/Welcome";
import { Routes, Route } from "react-router-dom";

const getRoutes = () => {
  return [
    {
      path: "/",
      Component: Welcome,
    },
    {
      path: "/licence-plates",
      Component: LicencePlates,
    },
    {
      path: "/earthquakes",
      Component: Earthquakes,
    },
  ];
};

export default function AppRoutes() {
  const routes = getRoutes();

  return (
    <Routes>
      {routes.map((r) => (
        <Route {...r} key={r.path}></Route>
      ))}
    </Routes>
  );
}
