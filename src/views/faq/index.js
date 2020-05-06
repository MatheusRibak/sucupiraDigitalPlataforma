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


      <Grid className={styles.description} color="primary">
        <Typography component="p" variant="h2">
          Sou Comerciante, como posso incluir o meu negócio?
        </Typography>
        Você clica em cadastrar, responde o questionário e manda algumas fotos dos seus produtos.
        <Typography component="p" variant="h2">
          Sou Cliente, como posso realizar e pagar pelo meu pedido?
        </Typography>
        Ainda não realizados pedidos ou pagamentos pelo site, você terá que ligar para o comerciantes e combinar diretamente com ele.

        <Typography component="p" variant="h2">
          Meu comércio não está na página principal, como posso achá-la?
        </Typography>
        A página principal só mostra 12 comércios por vez e cada vez que você atualiza o site, as opções são diferentes. Você consegue achar a sua página filtrando pelo campo departamento que ela está cadastrada!
        <Typography component="p" variant="h2">
          Sou Comerciante, como faço para editar meu cadastro?
        </Typography>
        Infelizmente não, seus dados vão direto para a página. Se quiser fazer alguma alteração você terá que preencher um novo cadastro e nos avisar no campo de observações.

        <Typography component="p" variant="h2">
          Como surgiu o Sucupira Digital?
        </Typography>
        Fomos participantes do Global Online Startup Weekend Covid-19 de Cabo Verde, onde fomos vencedores na área Empresas. Após isto decidimos continuar com o projeto visando auxiliar os comerciantes do mercado sucupira.
        <Typography component="p" variant="h2">
          Possui outras duvidas?
        </Typography>
        Iremos lhe auxiliar com o maior prazer, nos envie um email para sucupiradigital2020@gmail.com
      </Grid>

    </Grid>
  )
}

export default React.memo(Faq)
