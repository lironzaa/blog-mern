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
    if (validate()) window.alert('good');
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

export default withStyles(styles)(PostMessageForm);