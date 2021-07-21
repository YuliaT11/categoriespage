import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import illustration from '../../../assets/images/illustratorSec.png';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#FAFEFE',
        marginTop: '88px',

        '& .description': {
            marginTop: '32px',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D7EA5',
        },

        '& img': {
            width: '100%',
            mixBlendMode: 'luminosity',
            opacity: 0.3
        }
    },
    textField: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.06)',
        borderRadius: '2px',
        padding: '14px 16px',
        marginTop: '32px',
        cursor: 'pointer',

        [theme.breakpoints.up('md')]: {
            minWidth: '478px',
        },

        '& .MuiFormLabel-root': {
            margin: '14px 16px 5px',

            '&.Mui-focused': {
                color: '#8CC0C0'
            }
        },

        '& .MuiInput-underline:before, & .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none'
        },

        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #8CC0C0'
        },

        '& .MuiInputAdornment-root': {
            background: '#8CC0C0',
            borderRadius: '2px',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',

            '& svg': {
                color: 'white'
            }
        }
    }
}));

const SubscribeSection = ({classNameContainer}) => {
    const classes = useStyles();

   return (
       <div className={classes.root}>
           <Container
               maxWidth="lg"
               className={`${classNameContainer}`}
           >
               <Grid
                   container
                   alignItems="center"
                   spacing={6}
               >
                   <Grid
                       item
                       xs={12}
                       md={6}
                   >
                       <Typography variant="h5" component="h5">
                           Subscribe To Our Monthy E-Newsletter
                       </Typography>
                       <Typography className="description" variant="subtitle1" component="p">
                           Our goal is to give control back to contractors and property owners/managers. When you sign up for our free monthly e-newsletter you will be able to receive discount offers and early notice of future sales.
                       </Typography>
                       <TextField
                           label="Subscribe here"
                           id="margin-none"
                           defaultValue="Enter your email"
                           className={classes.textField}
                           disableUnderline={true}
                           InputProps={{
                               endAdornment: <InputAdornment position="end">
                                   <ArrowForwardIcon/>
                               </InputAdornment>,
                           }}
                       />
                   </Grid>
                   <Grid
                       item
                       xs={12}
                       md={6}
                   >
                       <img src={illustration} alt="illustration"/>
                   </Grid>
               </Grid>
           </Container>
       </div>
   )
}

export default SubscribeSection;