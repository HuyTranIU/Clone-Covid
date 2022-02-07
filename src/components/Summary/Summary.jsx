import { Grid } from '@material-ui/core';
import React from 'react';
import LineChart from '../Charts/LineChart/LineChart';

function Summary({ report }) {

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                    <LineChart data={report} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Summary;