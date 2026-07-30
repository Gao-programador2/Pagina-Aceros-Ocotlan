import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Sin StrictMode: el doble montaje rompe el widget de reCAPTCHA v2
createRoot(document.getElementById('root')).render(<App />);
