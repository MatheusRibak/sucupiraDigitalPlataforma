import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { Link as RouterLink, navigate } from '@reach/router'
import Tabletop from 'tabletop'
import classnames from 'classnames'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import ClientContext from '../../context'

import useStyles from './styles.js'

const Header = ({ children, location }) => {
  const styles = useStyles()
  const [clients, setClients] = useState([])

  useEffect(() => {
    Tabletop.init({
      key: '1zPa47bYiI-fYus9ETZIwqg1Qpj7acyDTNBLSyP2S3t4',
      callback: (data, tabletop) => {
        setClients(
          data
            .filter((info) => info.accepted === 'TRUE')
            .map((data) => {
              return {
                ...data,
                departamento: data.departamento.split(', '),
              }
            })
        )
      },
      simpleSheet: true,
    })
  }, [])

  useEffect(() => {
    if (
      !(
        location.pathname.includes('@') ||
        location.pathname.includes('sobre') ||
        location.pathname.includes('faq') ||
        location.pathname === '/'
      )
    ) {
      navigate('/error')
    }
  }, [location.pathname])

  return (
    <ClientContext.Provider value={clients}>
      <AppBar color="primary" position="static" className={styles.padding}>
        <Toolbar>
          <Link
            className={styles.image}
            component={RouterLink}
            to="/"
            state={
              location.state && {
                departament: location.state.departament,
              }
            }
          >
            <ArrowBackIcon className={styles.icon} color="secondary" />
          </Link>
          <Link
            color="primary"
            className={classnames(styles.link, {
              [styles.selected]: location.pathname === '/',
            })}
            component={RouterLink}
            to="/"
            state={
              location.state && {
                departament: location.state.departament,
              }
            }
          >
            HOME
          </Link>
          <Link
            color="primary"
            className={classnames(styles.link, {
              [styles.selected]: location.pathname === '/sobre',
            })}
            component={RouterLink}
            to="/sobre"
          >
            SOBRE
          </Link>
          <Link
            color="primary"
            className={classnames(styles.link, {
              [styles.selected]: location.pathname === '/faq',
            })}
            component={RouterLink}
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            href="https://forms.gle/sBtR3piNXvSDPhF5A"
            el="noreferrer"
            target="_blank"
            color="primary"
            className={styles.link}
          >
            CADASTRAR
          </Link>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12} className={styles.children}>
        {children}
      </Grid>
    </ClientContext.Provider>
  )
}

export default React.memo(Header)
