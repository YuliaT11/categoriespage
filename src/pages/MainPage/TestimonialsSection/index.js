import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import Photo1 from '../../../assets/images/PhotoTestimonials1.png';
import Photo2 from '../../../assets/images/PhotoTestimonials2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '175px',

        [theme.breakpoints.down('sm')]: {
            marginBottom: '75px',

            '& h5': {
                textAlign: 'center'
            }
        }
    },
    card: {
        background: '#FCFCFC',
        borderRadius: '16px',
        padding: '31px 35px 26px',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#636F7E',
        height: '252px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',

        '&:hover': {
            background: '#FFFFFF',
        },

        '& .details-block': {
            display: 'flex',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#20374F',

            '& img': {
                marginRight: '11px'
            },

            '& span': {
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: '20px',
                color: '#20374F'
            },

            '& svg': {
                width: '12px',
                height: '12px',
                color: '#F36B32'
            },

            '& .stars': {
                color: '#20374F',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center'
            }
        }
    },
}));

const TestimonialsSection = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={4}
            alignItems='flex-start'
            className={classes.root}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant="h5" component="h5">
                    Feedback From Recent Users
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
            >
                <div className={classes.card}>
                    <Typography variant="subtitle1" component="p">
                        Getting our material orders correct is crucial. I use OrderDesk to help find, purchase and manage our material deliveries.
                    </Typography>
                    <div className="details-block">
                        <img src={Photo1} alt=""/>
                        <div>
                            <Typography variant="subtitle1" component="p">
                                Mike
                            </Typography>
                            <Typography variant="subtitle1" component="span">
                                Brolga Construction
                            </Typography>
                            <div className="stars">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                (5.0)
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
            >
                <div className={classes.card}>
                    <Typography variant="subtitle1" component="p">
                        As a masonry contractor finding the right materials is so important. Since I've been using OrderDesk I've saved a lot of time being able to see what products are in stock
                    </Typography>
                    <div className="details-block">
                        <img src={Photo2} alt=""/>
                        <div>
                            <Typography variant="subtitle1" component="p">
                                Alex
                            </Typography>
                            <Typography variant="subtitle1" component="span">
                                Precision Masonry
                            </Typography>
                            <div className="stars">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                (5.0)
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
            >
                <div className={classes.card}>
                    <Typography variant="subtitle1" component="p">
                        I used OrderDesk for the first time on a city of Brampton job. OrderDesk made it easy for me to price match and order my materials in smaller quantities because of limited space on site.
                    </Typography>
                    <div className="details-block">
                        <img src={Photo2} alt=""/>
                        <div>
                            <Typography variant="subtitle1" component="p">
                                Alex
                            </Typography>
                            <Typography variant="subtitle1" component="span">
                                Precision Masonry
                            </Typography>
                            <div className="stars">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                (5.0)
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default TestimonialsSection;