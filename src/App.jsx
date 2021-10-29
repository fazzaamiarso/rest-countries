import Header from "./components/Header/Header";
import Filters from "./components/Filter/Filters";
import Countries from "./components/Card/Countries";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "./components/Card/CountryDetails";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import GlobalStyle from "./GlobalStyles";
import useDarkMode from "./components/Hooks/useDarkMode";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [theme, toggle] = useDarkMode();

  const toggleHandler = () => {
    toggle();
  };
  return (
    <>
      <ThemeProvider theme={Theme[theme]}>
        <GlobalStyle />
        <ErrorBoundary>
          <Header mode={theme} switchMode={toggleHandler} />
          <Switch>
            <Route exact path="/">
              <Filters />
              <Countries />
            </Route>
            <Route exact path="/:code">
              <CountryDetails />
            </Route>
          </Switch>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
