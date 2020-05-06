import React, { useState, useMemo, useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import ReactGA from 'react-ga'

import MainCard from './card'
import ClientContext from '../../context'

import useStyles from './styles'

const App = ({ location }) => {
  const styles = useStyles()
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const clients = useContext(ClientContext)

  const selectedState = useMemo(
    () => clients.filter((client) => client.state === state),
    [state, clients]
  )

  const selectedCity = useMemo(
    () => selectedState.filter((client) => client.city === city),
    [city, selectedState]
  )

  useEffect(() => {
    const trackingId = 'UA-162871245-1'
    ReactGA.initialize(trackingId)
    ReactGA.pageview('/homepage')
  }, [])

  const randomNumbers = useMemo(
    () =>
      Array.from({ length: 12 }, () => Math.floor(Math.random() * clients.length)),
    [clients.length]
  )

  const randomClients = useMemo(() => randomNumbers.map((item) => clients[item]), [
    clients,
    randomNumbers,
  ])

  useEffect(() => {
    if (location.state && location.state.state !== undefined) {
      setState(location.state.state)
      setCity(location.state.city)
    }
  }, [location.state])

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        className={styles.select}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          className={styles.title}
          component="h1"
          color="secondary"
          variant="h2"
        >
          Lista de Comércios Cadastrados na Sucupira Digital
        </Typography>
        
      </Grid>
      {selectedCity.length > 0 && (
        <Typography
          className={styles.total}
          component="h1"
          color="primary"
          variant="h2"
        >
          Total de {selectedCity.length} Comerciante{selectedCity.length > 1 && 's'}{' '}
          encontrados
        </Typography>
      )}
      {clients.length === 0 && <CircularProgress />}
      {randomNumbers[0] !== 0 && selectedState.length === 0 && state !== '' && (
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="column"
          className={styles.null}
        >
          <Typography
            className={styles.title}
            component="h2"
            color="primary"
            variant="h2"
          >
            Infelizmente não temos nenhum comerciante registrado perto de você <br />{' '}
          </Typography>
        </Grid>
      )}
      {clients && (
        <Grid className={styles.cards}>
          {selectedCity.length > 0 &&
            selectedCity.map((client) => (
              <MainCard key={client.id} client={client} />
            ))}
          {selectedCity.length === 0 &&
            selectedState.map((client) => (
              <MainCard key={client.id} client={client} />
            ))}
          {randomNumbers[0] !== 0 &&
            state === '' &&
            city === '' &&
            randomClients.map((client) => (
              <MainCard key={client.id} client={client} />
            ))}
        </Grid>
      )}
     
    </Grid>
  )
}

export default React.memo(App)
