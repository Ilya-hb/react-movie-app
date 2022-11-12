import {
    Container,
    Typography,
    Pagination,
    PaginationItem,
    Stack,
    Card,
    Grid,
    CardMedia,
    CardContent,
    CardActionArea,
    CircularProgress,
    Box,
} from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { NO_IMAGE_URL } from '../../api';
import { Link } from 'react-router-dom';


export default function Movies({ data, page, onChange, onLoading }) {
    // console.log(page)
    // console.log(data);
    // console.log(onLoading);
    const handlePageChange = (num) => {
        onChange(num);
    }

    return (
        <Container maxWidth="lg"
            sx={{ mt: '10px' }}
        >
            {onLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) :
                (<Stack spacing={2}>
                    {data.length !== 10 && (
                        <Pagination
                            size='large'
                            sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}
                            color='primary'
                            count={data.length}
                            page={page}
                            onChange={(_, num) => handlePageChange(num)}
                            className='paginate'
                            renderItem={
                                (item) => (
                                    <PaginationItem
                                        color='primary'
                                        sx={{ color: 'black' }}
                                        component={Link}
                                        to={`/?page=${item.page}`}
                                        {...item}
                                    />
                                )
                            }
                        />)}

                    <Grid
                        container
                        spacing={2}
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                        sx={{ mt: '0' }}
                    >
                        {data.map((el) => {
                            return <Grid item xs={3} key={el?.id || el?.show?.id}>
                                <Link to={`/movie/${el?.id || el?.show?.id}`} className='pagination-link'>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component='img'
                                                image={el.show?.image?.medium || el?.image?.medium || NO_IMAGE_URL}
                                                alt={el.show?.name}
                                            />
                                            <CardContent>
                                                <Typography noWrap gutterBottom variant='h5' component='p'>{el?.name || el?.show?.name}</Typography>
                                                <Typography variant='h5' component='span'>
                                                    <StarIcon
                                                        sx={{ color: '#4EAEC8', fontSize: '25px', mx: '3px', }} />
                                                    {el.show?.rating?.average || el?.rating?.average}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        })}
                    </Grid>
                </Stack>)
            }
        </Container>
    )
}
