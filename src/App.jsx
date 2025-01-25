import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container mt-5">
        <h1>Welcome to the Theme Switcher App</h1>
        <p>Use the Navbar to switch between light, dark, and system themes.</p>
      </div>
    </div>
  );
}

export default App;
