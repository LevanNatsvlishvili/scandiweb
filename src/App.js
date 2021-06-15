import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'Layout';
import { RenderRoutes } from 'Routes';
import { ThemeProvider } from 'styled-components';
import Theme from 'Theme';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Layout>
          <RenderRoutes />
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;