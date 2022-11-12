import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TVMAZE_API, NO_IMAGE_URL } from '../../api';
import axios from 'axios';
import { Container, Box } from '@mui/system';
import { CircularProgress, Typography, Grid, Tabs, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';

export default function Movie() {
    // console.log(movieData);
    const [movieData, setMovieData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('Episodes');
    const params = useParams();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(TVMAZE_API + `shows/${params.id}`);
                const { data: resp } = await axios.get(TVMAZE_API + `shows/${params.id}/episodes`)
                // console.log(response);
                setEpisodes(resp);
                setMovieData(response);
                console.log(resp);
            } catch (error) {
                console.log(error.message);
            } setLoading(false);
        }
        fetchData();
    }, [params.id, value])

    const removeTags = (target) => {
        if (target) {
            return target.replace(/<\/?[^>]+(>|$)/g, "");
        } else {
            return;
        }
    }

    return (
        <>  {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        ) : (<Container sx={{ margin: '20px 0' }}>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={4}>
                    <Box
                        component='img'
                        sx={{
                            maxWidth: { xs: 300, md: 300, lg: 350 }
                        }}
                        src={movieData?.image?.original || NO_IMAGE_URL}
                        alt={movieData.name + ' image'}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography component='h1'
                        variant='h4'
                    >{movieData.name}</Typography>
                    <Typography
                        component='p'
                    >
                        {removeTags(movieData.summary)}
                    </Typography>
                    <Box sx={{ width: '100%', color: 'black' }}>
                        <TabContext value={value}>
                            <TabList onChange={handleChange} centered indicatorColor='secondary'>
                                <Tab label="Episodes" sx={{ color: 'black' }} value='Episodes' />
                                <Tab label="Item Two" sx={{ color: 'black' }} value='1' />
                                <Tab label="Item Three" sx={{ color: 'black' }} value='2' />
                            </TabList>
                            <TabPanel value="Episodes">Episodes</TabPanel>
                            <TabPanel value="1">Item Two</TabPanel>
                            <TabPanel value="2">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography
                        variant='h4'
                        component='h2'
                    >
                        Show Info
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem' }}>{'Status: ' + (movieData.status || 'Unknown')}</Typography>
                    <Typography sx={{ fontSize: '1.2rem' }}>{'Genres: ' + (movieData.genres || 'Unknown')}</Typography>
                    <Typography sx={{ fontSize: '1.2rem' }}>{'Language: ' + (movieData.language || 'Unknown')}</Typography>
                    {/* <Typography sx={{ fontSize: '1.2rem' }}>{'Official site: ' + <a href={`${movieData.officialSite}`} rel="noreferrer" target="_blank">{movieData.officialSite}</a>}</Typography> */}
                    <Typography sx={{ fontSize: '1.2rem' }}>{'Premiered: ' + (movieData.premiered || 'Unknown')}</Typography>
                </Grid>
                <Grid item xs={8}></Grid>
            </Grid>
        </Container>)
        }

        </>

    )
}
