import React from "react";
import ReactDOM from "react-dom";
import { Panel } from "./panel";
// import RemoteButton from "app1/User";

const RemoteButton = React.lazy(() => import("app1/User").then(module => ({
  default: module.User
})));

ReactDOM.render(
  <div>
    <Panel />
   <React.Suspense fallback="loading">
    <RemoteButton />
   </React.Suspense>
  </div>,
  document.getElementById("root")
);
