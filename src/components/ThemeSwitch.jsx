import { NavDropdown } from 'react-bootstrap';
import useTheme from '../useTheme';

const ThemeSwitch = () => {
  const [theme, setTheme] = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <NavDropdown title={`Theme: ${theme}`} id="theme-dropdown" align="end">
      <NavDropdown.Item onClick={() => handleThemeChange('light')}>
        Light
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => handleThemeChange('dark')}>
        Dark
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => handleThemeChange('system')}>
        System
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default ThemeSwitch;
