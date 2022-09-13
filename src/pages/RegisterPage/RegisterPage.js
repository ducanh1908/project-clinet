// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="#">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function RegisterPage() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Create An Account
//           </Typography>

//           {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="username"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Full Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required fullWidth id="address" label="Address" name="address" autoComplete="address" />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="phoneNumber"
//                   label="Phone Number "
//                   name="phoneNumber"
//                   autoComplete="phoneNumber"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//               Sign Up
//             </Button>

//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box> */}
//         </Box>
//         <Copyright sx={{ mt: 6 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Box, Button, Grid } from '@material-ui/core';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../components/form-controls/input-field/index';
import { CssBaseline, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';


TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
const dispatch = useDis
function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      username: yup.string().required('Please enter a full name').min(2, 'Full name must be at least 2 characters'),
      password: yup
        .string()
        .required('Please enter a password')
        .min(6, 'Password must be at least 6 characters')
        .max(25, 'Password must be at most 25 characters'),
      email: yup.string().required('Please enter a email').email('Invalid email'),
      address: yup.string().required('Please enter a address').min(2, 'Address must be at least 2 characters'),
      phonenumber: yup
        .number()
        .required('Please enter a phone number')
        .min(10, 'Phone number must be at least 10 characters'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      address: '',
      phonenumber: '',
    },
    resolver: yupResolver(schema),
  });
  const theme = createTheme();

  const handleSubmit = (values) => {
    console.log('Todo Form:', values);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {/* <Box
            sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > */}
          <Avatar
            sx={{ m: 1, bgcolor: 'secondary.main', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* <LockOutlined></LockOutlined> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Create An Account
          </Typography>
          <form onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 3 }}>
            <InputField name="username" label="Full Name" form={form} autoF />
            <InputField name="password" label="Password" form={form} autoF />
            <InputField name="email" label="Email" form={form} autoF />

            <InputField name="address" label="Address" form={form} autoF />
            <InputField name="phonenumber" label="Phone Number" form={form} autoF />

            <Button type="submit" fullWidth color="primary" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          {/* </Box> */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default TodoForm;
