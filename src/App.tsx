import React from 'react';

import AppRoutes from './routes/AppRoutes';
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
