import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const app = (
  <Router>
    <App />
  </Router>
);

const root = document.getElementById('root');
createRoot(root).render(app);
