import React, { useEffect } from 'react';
import { TextField, withStyles, Button } from '@material-ui/core';
import useForm from './useForm';
import { connect } from 'react-redux';
import * as actions from '../actions/postMessage';
import ButterToast, { Cinnamon } from 'butter-toast';
import { AssignmentTurnedIn } from '@material-ui/icons';

const initialFieldValues = {
  title: '',
  message: ''
}

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  postBtn: {
    width: '50%'
  }
})

const PostMessageForm = ({ classes, ...props }) => {

  useEffect(() => {
    if (props.currentId != 0) {
      console.log(props);
      console.log(props.posts.find(post => post._id == props.currentId));
      setValues({
        ...props.posts.find(post => post._id == props.currentId)
      })
    }
  }, [props.currentId])

  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? '' : 'This field is required';
    temp.message = values.message ? '' : 'This field is required';
    setErrors({
      ...temp
    })
    return Object.values(temp).every(item => item === '');
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange } = useForm(initialFieldValues);

  const handleSubmit = e => {
    e.preventDefault();
    const onSuccess = () => ButterToast.raise({
      content: <Cinnamon.Crisp title="Post Box" icon={<AssignmentTurnedIn />}
        content="Submitted successfully" scheme={Cinnamon.Crisp.SCHEME_PURPLE}
      />
    })
    if (validate()) {
      props.createPost(values, onSuccess);
    }
  }

  return (
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <TextField name="title" variant="outlined" label="title"
        fullWidth values={values.title} onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })} />
      <TextField name="message" variant="outlined" label="message"
        fullWidth values={values.message} onChange={handleInputChange} multiline rows={4}
        {...(errors.message && { error: true, helperText: errors.message })} />
      <Button variant="contained" color="primary" size="large" type="submit" className={`${classes.postBtn}`} >submit </Button>
    </form>
  );
}

const mapStateToProps = state => ({
  posts: state.postMessages.posts
})

const mapActionsToProps = {
  createPost: actions.createPost,
  updatePost: actions.updatePost
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostMessageForm));