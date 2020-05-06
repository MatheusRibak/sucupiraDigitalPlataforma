import React, { useMemo, useContext, useCallback, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import StorefrontIcon from '@material-ui/icons/Storefront'
import Link from '@material-ui/core/Link'
import PhoneIcon from '@material-ui/icons/Phone'
import CircularProgress from '@material-ui/core/CircularProgress'
import ReactGA from 'react-ga'
import FacebookIcon from '@material-ui/icons/Facebook'
import ClientContext from '../../context'
import placeholder from '../../assets/placeholder.jpeg'

import useStyles from './styles'

const Client = ({ companyName, location }) => {
  const styles = useStyles()
  const clients = useContext(ClientContext)
  const [isPictureLoading, setLoadingImage] = useState(true)

  const currentClient = useMemo(
    () => clients.find((client) => client.instagram === companyName),
    [clients, companyName]
  )

  const handleLoadingImage = useCallback((event) => {
    if (event.type === 'load') {
      setLoadingImage(false)
    }
  }, [])

  const loadLink = useCallback(
    (type) => () => {
      ReactGA.event({
        category: type,
        action: 'Clicou no botão',
      })
    },
    []
  )


  return (
    <Grid className={styles.container}>
      {currentClient && (
        <Grid className={styles.content}>
          <Card className={styles.root}>
            <Grid className={styles.card}>
              {currentClient.photo[0] ? (
                <CardMedia
                  component="img"
                  image={currentClient.photo.split(',')[0].replace('open', 'uc')}
                  title={`Imagem principal ${currentClient.companyName}`}
                  className={styles.size}
                  onLoad={handleLoadingImage}
                />
              ) : (
                <img alt="Foto da marca" src={placeholder} className={styles.size} />
              )}
              {!!currentClient.photo[0] && isPictureLoading && (
                <CircularProgress className={styles.loading} />
              )}
              <Grid className={styles.info}>
                <Grid container spacing={1}>
                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <StorefrontIcon className={styles.mainIcon} />
                    <Typography color="primary" variant="h1" component="h1">
                      {currentClient.name}
                    </Typography>
                  </Grid>
                 
                  {currentClient.obs && (
                    <Grid
                      container
                      item
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <AccountCircleIcon className={styles.icon} />
                      <Typography className={styles.description} component="p">
                        {currentClient.obs}
                      </Typography>
                    </Grid>
                  )}

                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <PhoneIcon className={styles.icon} />
                    <Link
                      onClick={loadLink('Telefone')}
                      className={styles.title}
                      href={`tel:${currentClient.phoneNumber
                        .match(/[0-9]/g)
                        .join('')
                        .trim()}`}
                    >
                      {currentClient.phoneNumber}
                    </Link>
                  </Grid>

                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <FacebookIcon className={styles.icon} />
                    <Link
                      onClick={loadLink('Instagram')}
                      href={`https://www.facebook.com//${currentClient.linkFacebook
                        .replace('@', '')
                        .trim()}`}
                      className={styles.title}
                    >
                      {currentClient.linkFacebook}
                    </Link>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>

           
            {currentClient.obsProdutos && (
                  <Card className={styles.delivery}>
              <Typography className={styles.name}>
                Descrição dos Produtos: {' '}
              </Typography>
             
              <Typography className={styles.description} component="p">
              {currentClient.obsProdutos}
                      </Typography>

              
              

            </Card>
             )}

           
            {currentClient.allPhotos && (
              <Card className={styles.photos}>
                <Typography className={styles.name}>Produtos:</Typography>
                <br />
                <Grid
                  container
                  justify="center"
                  direction="column"
                  alignItems="center"
                >
                  {currentClient.allPhotos.split(',').map((photo) => (
                    <>
                      <img
                        key={photo}
                        src={photo.replace('open', 'uc')}
                        alt="cardapio"
                        className={styles.image}
                      />
                      <br />
                    </>
                  ))}
                </Grid>
              </Card>
            )}
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default React.memo(Client)
