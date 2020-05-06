import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    margin: '0 30px',
    fontFamily: 'Baloo Chettan',
    fontSize: '32px',
  },
  select: {
    marginBottom: '30px',
    backgroundColor: theme.palette.custom.mandy,
    padding: '30px',
    width: '100vw',
  },
  null: {
    height: '100vh',
  },
  dropdown: {
    color: '#fff',
    '&:before': {
      borderColor: '#fff',
    },
    '&:after': {
      borderColor: '#fff',
    },
  },
  label: {
    color: 'white',
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
  },
  bunny: {
    height: '100px',
    width: '100px',
    margin: '20px auto',
  },
  total: { fontFamily: 'Baloo Chettan' },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto',
    gridColumnGap: '16px',
    gridRowGap: '16px',
    margin: theme.spacing(2),

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  icon: {
    color: 'white',
  },
  obs: {
    fontWeight: 'normal',
    fontSize: '16px',
    margin: '50px 20px',
    textAlign: 'center',
    fontFamily: 'Baloo Chettan',
    color: theme.palette.custom.brownRust,
  },
}))
