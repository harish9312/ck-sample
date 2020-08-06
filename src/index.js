import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import Sample from "./Sample";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ConfigurationDialog from "./configuration-dialog";
export default class App1 extends React.Component {
  state = {
    configuration: null,
  };

  render() {
    // Configuration data needed to initialize the editor is available only after the configuration dialog
    // is submitted, hence the editor is initialized after ConfigurationDialog returns the configuration.
    if (!this.state.configuration) {
      return (
        <ConfigurationDialog
          onSubmit={(configuration) => this.setState({ configuration })}
        />
      );
    }

    return ['abcd', 'efgh', 'ijkl'].map((x) => (
      <Sample channelId={x} configuration={this.state.configuration} />
    ));
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
