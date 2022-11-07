import { Container, Typography } from '@mui/material'
import React from 'react'


export default function Movies({data}) {
   
    // console.log(data);
    return (
        <Container maxWidth="lg"
            sx={{ mt: '10px' }}
        >
            <Typography
                variant='h4'
                component="h4"
            >
                {data ? data.map((el, i) => {
                    return <p>{el.name}</p>

                })
                    : ''}
            </Typography>
        </Container>
    )
}
