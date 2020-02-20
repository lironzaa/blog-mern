import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postMessage';
import PostMessageForm from './PostMessageForm';
import { Grid, Paper, withStyles, List, Divider, Typography, ListItemText, ListItem } from '@material-ui/core';

const styles = theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  }
})

const PostMessages = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAll();
  }, [])

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm />
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
                    </ListItemText>
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              )
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>);
}

const mapStateToProps = state => ({
  posts: state.postMessages.posts
})

const mapActionsToProps = {
  fetchAll: actions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostMessages));