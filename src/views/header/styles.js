import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateRows: '80px 1fr 80px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    gridRow: '3',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    display: 'table-row',
    position: 'sticky',
    bottom: 0,
  },
  link: {
    fontFamily: 'Baloo Chettan',
    marginLeft: theme.spacing(3),
    fontWeight: '500',
    color: theme.palette.secondary.main,

    [theme.breakpoints.down(600)]: {
      fontSize: '12px',
    },
  },
  selected: {
    color: theme.palette.custom.mandy,
  },
  children: {
    gridArea: 'children',
    marginBottom: '84px',
  },
  img: {
    height: '48px',
    [theme.breakpoints.down(600)]: {
      display: 'none',
    },
  },
  imgMobile: {
    height: '64px',
    [theme.breakpoints.up(601)]: {
      display: 'none',
    },
  },
  icon: {
    height: '24px',
    width: '24px',
    color: '#fff',
  },
  image: {
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  padding: {
    paddingRight: theme.spacing(2),
  },
}))
