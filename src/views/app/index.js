import React, { useState, useCallback, useMemo, useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  const [departament, setDepartament] = useState('')
  const clients = useContext(ClientContext)

  const selectedState = useMemo(
    () => clients.filter((client) => client.departamento.find(value => value === departament)),
    [departament, clients]
  )

  const handleChange = useCallback((event) => {
    setDepartament(event.target.value)
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
    if (location.departament && location.state.departament !== undefined) {
      setDepartament(location.state.departament)
    }
  }, [location.departament])


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
            <InputLabel className={styles.label} htmlFor="departament-native-simple">
              Selecione apenas um departamento:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={departament}
              onChange={handleChange}
              className={styles.dropdown}
              classes={{
                icon: styles.icon,
              }}
              placeholder="Selecione um estado"
            >
              {DEPARTAMENTOS.map((departament) => (
                <MenuItem key={departament} value={departament}>
                  {departament}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {selectedState.length > 0 && (
        <Typography
          className={styles.total}
          component="h1"
          color="primary"
          variant="h2"
        >
          Total de {selectedState.length} Comerciante{selectedState.length > 1 && 's'}{' '}
          encontrados
        </Typography>
      )}
      {clients.length === 0 && <CircularProgress />}
      {randomNumbers[0] !== 0 && selectedState.length === 0 && departament !== '' && (
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
          {departament.length > 0 &&
            selectedState.map((client) => (
              <MainCard key={client.id} client={client} />
            ))}
          {
            departament.length === 0 &&
            clients.map((client) => (
              <MainCard key={client.id} client={client} />
            ))}
        </Grid>
      )}
    </Grid>
  )
}

export default React.memo(App)
