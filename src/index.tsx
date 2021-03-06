import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
