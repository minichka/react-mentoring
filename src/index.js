import React from "react";
import ReactDOM from "react-dom";
import FotoList from "./components/fotoList";
import NavBar from "./components/navbar";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from "./components/js/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        {/* <NavBar /> */}
        {/* <main className="bg-light"> */}
        <FotoList />
        {/* </main> */}
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
