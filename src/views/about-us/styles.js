import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '20px 250px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 10px',
    },
  },
  description: {
    textAlign: 'justify',
    color: theme.palette.custom.mandy,
    lineHeight: '1.5',
    margin: theme.spacing(3),
  },
  contact: {
    display: 'grid',
    gridTemplateRows: 'min-content min-content auto min-content',
    gridTemplateColumns: '200px',
    gridGap: theme.spacing(2),
    alignItems: 'start',
    justifyItems: 'center',
    margin: theme.spacing(2),
  },
  img: {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    border: `4px solid ${theme.palette.custom.mandy}`,
  },
  name: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
    fontFamily: 'Baloo Chettan',
    textAlign: 'center',
  },
  about: {
    fontSize: '12px',
    textAlign: 'justify',
    color: theme.palette.custom.mandy,
    lineHeight: 1.5,
  },
  icon: {
    height: '24px',
    margin: '0 8px',
  },
}))
