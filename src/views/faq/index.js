import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ReactGA from 'react-ga'

import useStyles from './styles'

const Faq = () => {
  const styles = useStyles()

  useEffect(() => {
    const trackingId = 'UA-162871245-1'
    ReactGA.initialize(trackingId)
    ReactGA.pageview('/faq')
  }, [])

  return (
    <Grid
      container
      className={styles.container}
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Typography component="h1" color="primary" variant="h1">
        Perguntas Frequentes
      </Typography>
     
    </Grid>
  )
}

export default React.memo(Faq)
