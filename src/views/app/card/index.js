import React, { useState, useCallback } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import StorefrontIcon from '@material-ui/icons/Storefront'
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link as RouterLink } from '@reach/router'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress'
import FacebookIcon from '@material-ui/icons/Facebook'

import placeholder from '../../../assets/placeholder.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,

    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  icon: {
    height: 12,
    width: 12,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  name: {
    color: theme.palette.custom.brownRust,
  },
  description: {
    color: theme.palette.custom.brownRust,
    fontWeight: '100',
  },
  loading: {
    position: 'absolute',
    top: 75,
    margin: 'auto 150px 0',
  },
  placeholder: {
    height: '140px',
    margin: '0 80px',
  },
  margin: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: '0',
      backgroundColor: '#fff',
      width: '100%',
    },
  },
}))

const MainCard = ({ client }) => {
  const styles = useStyles()
  const photos = client.photo.split(',')
  const [isPictureLoading, setLoadingImage] = useState(true)

  const handleLoadingImage = useCallback((event) => {
    if (event.type === 'load') {
      setLoadingImage(false)
    }
  }, [])

  return (
    <Card className={styles.root}>
      <CardActionArea
        component={RouterLink}
        to={`/${client.instagram.trim()}`}
        state={{ state: client.state, city: client.city }}
      >
        {photos[0] ? (
          <CardMedia
            component="img"
            alt="Foto da marca"
            height="140"
            image={photos[0].replace('open', 'uc')}
            onLoad={handleLoadingImage}
          />
        ) : (
          <img
            alt="Foto da marca"
            src={placeholder}
            className={styles.placeholder}
          />
        )}
        {photos[0] && isPictureLoading && (
          <CircularProgress className={styles.loading} />
        )}
        <CardContent>
          <Grid container spacing={1}>
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <StorefrontIcon className={styles.icon} />
              <Typography className={styles.name} variant="h5" component="h2">
                {client.name}
              </Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={styles.obs}
            >
              <AccountCircleIcon className={styles.icon} />
              <Typography className={styles.description} variant="h5" component="h2">
                {client.name}
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <FacebookIcon className={styles.icon} />
              <Typography className={styles.name} variant="h5" component="h2">
                {client.linkFacebook}
              </Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Typography
                className={styles.name}
                variant="h5"
                component="h2"
              ></Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Typography
                className={styles.name}
                variant="h5"
                component="h2"
              ></Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Typography
                className={styles.name}
                variant="h5"
                component="h2"
              ></Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Typography
                className={styles.name}
                variant="h5"
                component="h2"
              ></Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>

      <Grid className={styles.margin}>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            href={`tel:${client.phoneNumber.match(/[0-9]/g).join('')}`}
          >
            Entrar em contato
          </Button>
          <Button
            component={RouterLink}
            to={`/${client.instagram}`}
            size="small"
            color="primary"
          >
            Saber mais
          </Button>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default React.memo(MainCard)
