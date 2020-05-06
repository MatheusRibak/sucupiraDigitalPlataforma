import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
  },
  content: {
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    direction: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',

    [theme.breakpoints.down('md')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '400px',
    },
  },
  size: {
    maxHeight: '400px',
    maxWidth: '300px',

    [theme.breakpoints.down('md')]: {
      maxHeight: '300px',
      maxWidth: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
  info: {
    padding: theme.spacing(2),
  },
  type: {
    color: theme.palette.custom.mandy,
    fontSize: '14px',
  },
  loading: {
    margin: '-50px auto 0',
  },
  icon: {
    color: theme.palette.custom.mandy,
    marginRight: theme.spacing(2),
    height: '24px',
    width: '24px',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    height: '24px',
    width: '24px',
  },
  button: {
    margin: theme.spacing(1),
  },
  newButton: {
    cursor: 'default',
    margin: theme.spacing(1),
  },
  mainIcon: {
    color: theme.palette.custom.mandy,
    height: '32px',
    width: '32px',
    marginRight: theme.spacing(1),
  },
  description: {
    fontSize: '14px',
    fontWeight: '300',
    color: theme.palette.custom.brownRust,
  },
  title: { fontSize: '14px', color: theme.palette.custom.brownRust },
  delivery: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: '24px',
    color: theme.palette.custom.brownRust,
    fontFamily: 'Baloo Chettan',
    margin: theme.spacing(2),
  },
  image: {
    maxHeight: '500px',
    maxWidth: '500px',

    [theme.breakpoints.down('md')]: {
      maxHeight: '300px',
      maxWidth: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
  photos: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10px',
  },
}))
