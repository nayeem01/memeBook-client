import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Post from './Post'
const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      paddingTop: '6vw',
      paddingLeft: '18vw',
    },
  })
)
const Card: React.FC = () => {
  const classes = useStyles()
  return (
    <Container>
      <main className={classes.content}>
        {[1, 2].map((x, index) => (
          <Post key={x} />
        ))}
      </main>
    </Container>
  )
}

export default Card
