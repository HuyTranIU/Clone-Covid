import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: props => {
        if (props.type === 'confirmed') return { borderLeft: '5px soild #c9302c' };
        if (props.type === 'recovered') return { borderLeft: '5px soild #28a745' };
        else return { borderLeft: '5px soild gray' }
    },
    title: {
        fontSize: 18, marginBottom: 5
    },
    count: {
        fontWeight: 'bold', fontSize: 18
    }
})


export default function HighlightCard({ title, count, type }) {
    const styles = useStyles({ type })

    return (
        <div>
            <Card className={styles.root}>
                <CardContent>
                    <Typography component="p" variant="body2" className={styles.title}>{title}</Typography>
                    <Typography component="span" variant="body2" className={styles.count}>{count}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
