import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import CategoryCard from './CategoryCard';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '136px',
    },
    categoriesWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'self-start',
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
        }
    },
}));

const CategoriesSection = ({categories}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.root}
        >
            <Grid item xs={12}>
                <Typography variant="h5" component="h5">
                    Browse by Building Material Category
                </Typography>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    className={classes.categoriesWrapper}
                >
                    {
                        categories.length > 0 && categories.map((category, index) =>
                            <CategoryCard
                                category={category}
                                subcategories={category.subcategories}
                                key={index}
                            />
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CategoriesSection;