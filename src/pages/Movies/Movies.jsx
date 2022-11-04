import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Movies() {
    return (
        <Container maxWidth="lg"
        sx={{mt:'10px'}}
        >
            <Typography
                variant='h4'
                component="h4"
            >
                Movies
            </Typography>
        </Container>
    )
}
