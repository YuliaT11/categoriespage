import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import MaterialIllustration from '../../../assets/images/MaterialsIllustration.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '136px',
        marginBottom: '136px',
        position: 'relative',

        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginTop: '56px',
            marginBottom: '56px',

            '& img': {
                width: '100%'
            },
        },

        '& .description': {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D7EA5',
            marginTop: '14px'
        }
    },
    illustration: {
        mixBlendMode: 'luminosity',
        position: 'absolute',
        right: '-10%'
    }
}));

const OrderFree = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={4}
            alignItems='center'
            className={classes.root}
        >
            <Grid
                item
                xs={12}
                md={6}
            >
                <img src="https://tradefy.s3.amazonaws.com/images/Material+Order+Desk+Sample+Panel.svg" alt=""/>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <Typography variant="h5" component="h5">
                    Order Your FREE Sample Today!
                </Typography>
                <Typography className="description" variant="subtitle1" component="p">
                    To ensure the colour, texture and size is correct for your project order your free sample today. Due to screen differences actual colour may vary.
                    Pro tip: Bring the sample to the brightest and shadiest spots of your property to see how it'll look in all lighting.
                </Typography>
            </Grid>
            <img className={classes.illustration} src={MaterialIllustration} alt="Material Illustration"/>
        </Grid>
    )
};

export default OrderFree;