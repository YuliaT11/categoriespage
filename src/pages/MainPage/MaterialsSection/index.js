import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import MaterialMasonry from '../../../assets/images/MaterialMasonry.png';
import MaterialBrick from '../../../assets/images/MaterialBrick.png';
import MaterialEnvelope from '../../../assets/images/MaterialEnvelope.png';
import MaterialGravel from '../../../assets/images/MaterialGravel.png';
import MaterialLumber from '../../../assets/images/MaterialLumber.png';
import MaterialTyvek from '../../../assets/images/MaterialTyvek.png';
import MaterialHardscape from '../../../assets/images/MaterialHardscape.png';
import MaterialAggregates from '../../../assets/images/MaterialAggregates.png';
import Button from '../../../components/Button';

const useStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        },
    },
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '40px',

        [theme.breakpoints.down('md')]: {
            margin: '40px 24px 0',
        },

        '& div': {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '18px'
        }
    },
    buttonContainer: {
        marginTop: '56px',
        display: 'flex',
        justifyContent: 'center',

        '& button': {
            width: '168px',
        }
    },
}));

const MaterialsSection = () => {
    const classes = useStyles();

    return (
        <Grid
            container
        >
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h5" component="h5">
                    Popular Building Materials
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                className={classes.root}
            >
                <div>
                    <img src={MaterialMasonry} alt="Material Masonry"/>
                    <p>Masonry</p>
                </div>
                <div>
                    <img src={MaterialBrick} alt="Material Brick"/>
                    <p>Brick</p>
                </div>
                <div>
                    <img src={MaterialEnvelope} alt="Material Envelope"/>
                    <p>Insulation <br/> Envelope</p>
                </div>
                <div>
                    <img src={MaterialGravel} alt="Material Gravel"/>
                    <p>Gravel</p>
                </div>
                <div>
                    <img src={MaterialLumber} alt="Material Lumber"/>
                    <p>Lumber</p>
                </div>
                <div>
                    <img src={MaterialTyvek} alt="Material Tyvek"/>
                    <p>Tyvek</p>
                </div>
                <div>
                    <img src={MaterialHardscape} alt="Material Hardscape"/>
                    <p>Hardscape</p>
                </div>
                <div>
                    <img src={MaterialAggregates} alt="Material Aggregates"/>
                    <p>Aggregates</p>
                </div>
            </Grid>
            <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.buttonContainer}
            >
                <Button variant="primary">
                    See Popular
                </Button>
            </Grid>
        </Grid>
    )
};

export default MaterialsSection;