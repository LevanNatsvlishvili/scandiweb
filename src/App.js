import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'Layout';
import { RenderRoutes } from 'Router/Routes';
import { ThemeProvider } from 'styled-components';
import Theme from 'Utils/Theme';
import AppContextProvider from 'Store/AppContext';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <AppContextProvider>
        <Router>
          <Layout>
            <RenderRoutes />
          </Layout>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;