import React from 'react';
import {Grid, makeStyles, Typography, useMediaQuery} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles({
    root: {
        marginTop: '135px',
        marginBottom: '180px'
    },
    container: {
        height: '200px',

        '& .react-multi-carousel-item': {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    card: {
        position: 'relative',
        width: '104px',
        height: '104px',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&::before': {
            content: '""',
            width: '104px',
            height: '104px',
            background: '#FFFFFF',
            borderRadius: '16px',
            transform: 'rotate(-45deg)',
            position: 'absolute',
            boxShadow: '0 4px 40px rgba(0, 0, 0, 0.08)',
            zIndex: -1,
            top: 0,
        },
    }
});

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const BandsSection = ({manufacturers}) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1024px)');

    return (
        <div className={classes.root}>
            <Grid
                container
            >
                <Grid item xs={12}>
                    <Typography variant="h5" component="h5">
                        Featured Bands
                    </Typography>
                </Grid>
            </Grid>
            <Carousel
                className={classes.container}
                showDots={!matches}
                arrows={!matches}
                responsive={responsive}
            >
                {
                    manufacturers.map((logo, index) =>
                        <div key={index} className={classes.card}>
                            <img src={logo} alt=""/>
                        </div>
                    )
                }
            </Carousel>
        </div>
    )
};

export default BandsSection;