import React from 'react';
import { TextField, withStyles, Button } from '@material-ui/core';
import useForm from './useForm'

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

  const {
    values,
    setValues,
    handleInputChange } = useForm(initialFieldValues);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <TextField name="title" variant="outlined" label="title"
        fullWidth values={values.title} onChange={handleInputChange} />
      <TextField name="message" variant="outlined" label="message"
        fullWidth values={values.message} onChange={handleInputChange} multiline rows={4} />
      <Button variant="contained" color="primary" size="large" type="submit" className={`${classes.postBtn}`} >submit </Button>
    </form>
  );
}

export default withStyles(styles)(PostMessageForm);