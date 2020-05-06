import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from '@reach/router'

import * as serviceWorker from './serviceWorker'
import App from './views/app'
import Client from './views/client'
import Header from './views/header'
import Faq from './views/faq'
import AboutUs from './views/about-us'
import NotFound from './views/not-found'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#054f77',
    },
    secondary: {
      main: '#fff',
    },
    custom: {
      mandy: '#066395',
      tacao: '#ECB187',
      brownRust: '#054f77',
    },
    background: {
      default: 'white',
    },
  },
  typography: {
    h1: {
      fontSize: '32px',
      fontWeight: 'bold',
      fontFamily: 'Baloo Chettan',
    },
    h2: {
      fontSize: '20px',
      fontWeight: '500',
      fontFamily: 'Baloo Chettan',
      color: '#066395',
      margin: '10px 0',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '1.5',
    },
    h4: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '1.33',
      color: '#054f77',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
  },
  root: {
    backgroundColor: 'white',
    button: {
      textTransform: 'capitalize',
    },
    input: {
      fontSize: '16px',
      appearance: 'none',
    },
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        fontSize: '2px',
      },
    },
    MuiSvgIcon: {
      root: {
        height: '20px',
        width: '20px',
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '16px',
        lineHeight: '1.5',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '16px',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '16px',
        lineHeight: 'normal',
      },
    },
    MuiButton: {
      containedPrimary: {
        color: 'white',
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header path="/">
          <App path="/" />
          <Client path="/:companyName" />
          <Faq path="/faq" />
          <AboutUs path="/sobre" />
          <NotFound path="/error" />
        </Header>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
