import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ReactGA from 'react-ga'

import useStyles from './styles'

const AboutUs = () => {
  const styles = useStyles()

  useEffect(() => {
    ReactGA.pageview('/sobre')
  }, [])

  return (
    <Grid
      container
      className={styles.container}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography component="h1" color="primary" variant="h1">
        Sobre nós
      </Typography>
      <Typography className={styles.description} component="p" color="primary">
        Com a chegada do Covid-19 vários comércios tiveram que ser fechados ao redor do mundo. O Mercado Sucupira em Cabo Verde não foi diferente.
      <br />
Devido a isto criamos o Sucupira Digital onde conectados os comerciantes com os seus clientes.
<br />
Pelo site será possivel que os clientes encontrem os comerciantes cadastrados e entrem em contatos com os mesmos para realizar seus pedidos.
      </Typography>
    </Grid>
  )
}

export default React.memo(AboutUs)
