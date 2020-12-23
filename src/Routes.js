import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginView, MainView, ProfileSettingsView } from "./views";

// Set default login for all if not authed
const views = [
  { path: "/", component: MainView },
  { path: "/login", component: LoginView },
  { path: "/profile", component: ProfileSettingsView },
];

const Routes = () => {
  console.log(views);
  return (
    <Switch>
      {views.map((viewRoute, i) => (
        <Route
          key={"route--" + i}
          exact
          path={viewRoute.path}
          component={viewRoute.component}
        />
      ))}
      {/* <Route component={ErrorNotFoundView} /> */}
    </Switch>
  );
};

export default Routes;
