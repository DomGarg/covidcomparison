import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({data: {confirmed, deaths, lastUpdate}}) => {
if (!confirmed || !deaths){
    return 'Please wait, loading data...'
}

    return (
        <div className={StylesProvider.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Infected
                        </Typography>
                        <Typography variant="h5"> <CountUp start={0} end={confirmed.value} duration={3} separator=","/> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Deaths
                        </Typography>
                        <Typography variant="h5"> <CountUp start={0} end={deaths.value} duration={3} separator=","/> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default Cards;