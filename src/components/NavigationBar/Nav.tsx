import React from 'react'
import './style.scss'
import {
  Badge,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import FaceIcon from '@material-ui/icons/Face'
import GroupIcon from '@material-ui/icons/Group'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PostAddIcon from '@material-ui/icons/PostAdd'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#3949ab',
      color: '#ffff',
    },
    toolbarItem: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    message: {
      padding: theme.spacing(2),
    },
    titleName: {
      display: 'flex',
      paddingTop: 10,
      justifyContent: 'center',
    },
  })
)

interface Props {
  window?: () => Window
}

export default function Nav(props: Props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h6" className={classes.titleName}>
          memeBook
        </Typography>
      </div>
      <Divider />
      <List>
        {['Frinends', 'Group'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 1 ? <GroupIcon /> : <FaceIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className={classes.message}>Messages</Typography>
      <List>
        {['Nayeem', 'Ahnaf1200', 'Mehedi00', 'Khalid42'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarItem}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton aria-label="message">
            <PostAddIcon />
          </IconButton>
          <IconButton aria-label="message">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="message">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
