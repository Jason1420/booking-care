import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";


import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={reduxStore}>
        <IntlProviderWrapper>
            <App persistor={persistor} />
        </IntlProviderWrapper>
    </Provider>,
    document.getElementById('root')
);



serviceWorker.unregister();
