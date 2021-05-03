import React from 'react'
import Comments from './Comments'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Box, Card, TextField } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import CommentIcon from '@material-ui/icons/Comment'
import Collapse from '@material-ui/core/Collapse'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100vw',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    icons: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    textField: {
      width: '30vw',
    },
    comment: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

export default function Post() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            alt="ahanf1200"
            src="/img/jon-snow-759.jpg"
            className={classes.avatar}
          >
            R
          </Avatar>
        }
        title="Ahanf1200"
        subheader="May 14, 2021"
      />
      <CardMedia
        className={classes.media}
        image="/img/meme.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Yesterday this happened to me
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.icons}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <CommentIcon />
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className={classes.comment}>
          <TextField
            className={classes.textField}
            id="outlined-secondary"
            label="comment"
            variant="outlined"
            color="secondary"
          />
        </Box>

        <CardContent>
          <Comments />
        </CardContent>
      </Collapse>
    </Card>
  )
}
