import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistR, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistR}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


//<Provider store={store}> ... </Provider>: Оборачивает <App /> в <Provider>. 
//<Provider> предоставляет доступ к Redux store для всех компонентов, которые находятся внутри него. 
//Здесь Redux store передается в качестве свойства store