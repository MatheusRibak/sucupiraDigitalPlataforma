import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '20px 250px',
    width: '100vw',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '20px 20px',
    },
  },
  description: {
    textAlign: 'justify',
    color: theme.palette.custom.brownRust,
    lineHeight: '1.5',
    margin: theme.spacing(3),
  },
  bunny: {
    margin: '0 auto',
    height: '64px',
  },
}))
