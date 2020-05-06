import React, { useState, useCallback, useMemo, useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import ReactGA from 'react-ga'

import MainCard from './card'
import ClientContext from '../../context'

import useStyles from './styles'

const DEPARTAMENTOS = [
  'Artes',
  'Artesanato e Costura',
  'Automóveis e Motos',
  'Roupas e acessórios para bebê',
  'Beleza',
  'Livros',
  'Moda Masculina',
  'Câmera e Foto',
  'Telemóveis e Acessórios',
  'Computadores e Acessórios Eletrônicos',
  'Moda',
  'Mobília',
  'Moda para meninas',
  'Fones de ouvido',
  'Casa',
  'Home Improvement',
  'Industrial e científico',
  'Cozinha',
  'Equipamento de viagem para bagagem',
  'Sapatos masculinos',
  'Roupa para Homem',
  'Moda masculina',
  'Filmes e TV',
  'Instrumentos musicais',
  'Eletrônicos para Escritório',
  'Suprimentos para animais de estimação',
  'Ferramentas elétricas e manuais',
  'Esportes & Ar Livre',
  'Brinquedos e jogos',
  'Videogames',
  'Sapatos femininos',
  'Roupas Femininas',
  'Moda feminina',
  'Jóias Femininas',
  'Legumes e verduras',
  'Mercearias',
  'Charcuteria',
  'Talho',
  'Peixaria',
]

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

  const handleChange = useCallback((event) => {
    setState(event.target.value)
  }, [])

  const handleCityChange = useCallback((event) => {
    setCity(event.target.value)
  }, [])

  const stateCities = useMemo(() => {
    const array = clients.map((client) =>
      client.state === state ? client.city : null
    )
    return array
      .filter((item, pos) => array.indexOf(item) === pos)
      .filter((item) => item !== null)
      .sort((a, b) => {
        if (a > b) {
          return 1
        }
        if (b > a) {
          return -1
        }
        return 0
      })
  }, [state, clients])

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

        <Grid container justify="center">
          <FormControl className={styles.formControl}>
            <InputLabel className={styles.label} htmlFor="state-native-simple">
              Selecione apenas um departamento:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              onChange={handleChange}
              className={styles.dropdown}
              classes={{
                icon: styles.icon,
              }}
              placeholder="Selecione um estado"
            >
              {DEPARTAMENTOS.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {state !== '' && selectedState.length > 1 && (
            <FormControl className={styles.formControl}>
              <InputLabel className={styles.label} htmlFor="state-native-simple">
                Selecione a sua Cidade
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                onChange={handleCityChange}
                className={styles.dropdown}
                classes={{
                  icon: styles.icon,
                }}
                placeholder="Selecione um estado"
              >
                {stateCities.map((client) => (
                  <MenuItem key={client} value={client}>
                    {client}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
     
        
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
