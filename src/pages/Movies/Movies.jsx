import { Container, Typography, Pagination, Stack } from '@mui/material'
import React from 'react'


export default function Movies({ data, page, onChange }) {
    // console.log(page)
    // console.log(data);
    const handlePageChange = (num) => {
        onChange(num)
    }
    return (
        <Container maxWidth="lg"
            sx={{ mt: '10px' }}
        >
            {/* <Typography
                variant='h4'
                component="h4"
            >
                {data ? data.map((el, i) => {
                    return <p>{el.name || el.show.name}</p>

                })
                    : ''}
            </Typography> */}
           
            <Pagination
                count={10}
                page={page}
                onChange={(_, num) => handlePageChange(num)}
            />
            {
                data.map((el) => {
                    return <p key={el.show.id || el.id}>{el.name || el.show.name}</p>
                })
            }

        </Container>
    )
}
