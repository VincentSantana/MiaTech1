import ReactDOM from 'react-dom/client';
import App from './src/pages/App/App.jsx';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </ReduxProvider>
);