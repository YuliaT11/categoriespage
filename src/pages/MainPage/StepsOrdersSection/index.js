import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import IconSearchOrder from '../../../components/icons/IconSearchOrder';
import IconSamplesOrder from '../../../components/icons/IconSamplesOrder';
import IconBuyOrder from '../../../components/icons/IconBuyOrder';
import IconManageOrders from '../../../components/icons/IconManageOrders';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '136px',

        '& svg': {
            marginLeft: '-40px'
        },

        [theme.breakpoints.down('md')]: {
            '& h5': {
                textAlign: 'center'
            },
            '& svg': {
                marginLeft: '0'
            },
            '& .card': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }
        }
    },
    titleBlock: {
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#636F7E'
    },
    descriptionBlock: {
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#636F7E',
        marginTop: '16px'
    }
}));

const StepsOrdersSection = () => {
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
            >
                <Typography variant="h5" component="h5">
                    Few Simple Steps to Make Your Order
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={3}
                className="card"
            >
                <IconSearchOrder/>
                <Typography className={classes.titleBlock} variant="h5" component="h4">
                    Search and Compare
                </Typography>
                <Typography className={classes.descriptionBlock} variant="h5" component="p">
                    Search & filter almost any building material. Compare pricing, stock, and lead times
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={3}
                className="card"
            >
                <IconSamplesOrder/>
                <Typography  className={classes.titleBlock} variant="h5" component="h4">
                    Get Samples
                </Typography>
                <Typography className={classes.descriptionBlock} variant="h5" component="p">
                    Order free paper samples or order physicals + shipping & delivered in 48 hours
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={3}
                className="card"
            >
                <IconBuyOrder/>
                <Typography className={classes.titleBlock} variant="h5" component="h4">
                    Buy
                </Typography>
                <Typography className={classes.descriptionBlock} variant="h5" component="p">
                    Order from local suppliers in confidence with our secure encrypted payments
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={3}
                className="card"
            >
                <IconManageOrders/>
                <Typography className={classes.titleBlock} variant="h5" component="h4">
                    Manage Orders
                </Typography>
                <Typography className={classes.descriptionBlock} variant="h5" component="p">
                    Manage all your orders in a simple system and control your pick-ups and deliveries
                </Typography>
            </Grid>
        </Grid>
    )
};

export default StepsOrdersSection;