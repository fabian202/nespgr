import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useRoutes } from "hookrouter";
import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout";
import Login from "./screens/Login";
import Task from "./screens/Task";
import Register from "./screens/Register";

//TODO: separate routes
const routes = {
  "/": () => <PublicLayout component={Login} />,
  "/register": () => <PublicLayout component={Register} />,
  "/tasks": () => <PrivateLayout component={Task} />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
};

export default App;
