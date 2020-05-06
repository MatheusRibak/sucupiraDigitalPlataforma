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
        Aqui vai o sobre nós
      </Typography>
    </Grid>
  )
}

export default React.memo(AboutUs)
