import React, { useState } from 'react';
import './App.css';
import { Menu } from './components/UI/menu/Menu';
import { menuRoutes } from './components/UI/menu/menuItems';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Navbar header="Task management" menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu header="Main menu" items={menuRoutes} active={menuActive} setActive={setMenuActive} />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
