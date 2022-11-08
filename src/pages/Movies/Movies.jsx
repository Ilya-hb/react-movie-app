import { Container, Typography, Pagination, Stack, Card, Grid, CardMedia, CardContent, CardActionArea } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

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
            <Stack spacing={2}>
                <Pagination
                    color='primary'
                    count={10}
                    page={page}
                    onChange={(_, num) => handlePageChange(num)}
                    className='paginate'
                />
                <Grid
                    container
                    spacing={2}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                >
                    {data.map((el) => {
                        return <Grid item xs={3} key={el?.id}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        // image={el.image.medium || el.show.image.medium}
                                        image={el.show?.image.medium}
                                        // alt={el.name || el.show.name}
                                        alt={el.show?.name}
                                    />
                                    <CardContent sx={{}}>
                                        <Typography gutterBottom variant='h5' component='p'>{el?.name}</Typography>
                                        <Typography variant='h5' component='span'>
                                            <StarIcon sx={{ color: '#4EAEC8', fontSize: '25px', mx: '3px', }} />{el.score || el.rating.average}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                        </Grid>

                    })}

                </Grid>

            </Stack>



        </Container>
    )
}
