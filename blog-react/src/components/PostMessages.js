import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postMessage';
import PostMessageForm from './PostMessageForm';
import { Grid, Paper, withStyles, List, Divider, Typography, ListItemText, ListItem, Button } from '@material-ui/core';

const styles = theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})

const PostMessages = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAll();
  }, [])

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm {...{ currentId, setCurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {props.posts.map((post, index) => {
              return (
                <Fragment key={index}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h5">
                        {post.title}
                      </Typography>
                      <div>
                        {post.message}
                      </div>
                      <div className={classes.actionDiv}>
                        <Button onClick={() => {
                          setCurrentId(post._id);
                          console.log(post._id);
                        }} className={classes.smMargin} variant="contained" color="primary" size="small">Edit</Button>
                        <Button className={classes.smMargin} variant="contained" color="secondary" size="small">Delete</Button>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              )
            })}
          </List>
        </Paper>
      </Grid>
    </Grid >);
}

const mapStateToProps = state => ({
  posts: state.postMessages.posts
})

const mapActionsToProps = {
  fetchAll: actions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostMessages));