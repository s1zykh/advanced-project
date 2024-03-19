import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>ТЕМА</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
export default App;
