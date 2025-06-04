// src/App.js
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AppRoutes from './AppRoutes';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const theme = createTheme();

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;