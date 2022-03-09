import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

//import jquery and popper js for Bootstrap class js
import $ from 'jquery'
import Popper from 'popper.js'

//Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
Sentry.init({
  dsn: "https://307e9c86c3d24545b1363d266c3459d0@o922643.ingest.sentry.io/6251368",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

