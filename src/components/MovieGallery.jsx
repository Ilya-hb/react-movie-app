import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TVMAZE_API } from '../api';
import { ImageList, ImageListItem, Box } from '@mui/material';
export default function MovieGallery({ id }) {
    const [loading, setLoading] = useState(false);
    const [movieImages, setMovieImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(TVMAZE_API + `shows/${id}/images`);
                setMovieImages(response);
                console.log(response);
            } catch (error) {
                console.log(error.message);
            } setLoading(false);
        }
        fetchData();
    }, [id])
    return (<Box>
        <ImageList variant='masonry' cols={3} gap={8}>
            {movieImages.map((el) => {
                return <ImageListItem key={el.id}>
                    <img src={el.resolutions.original.url} alt='pic' loading='lazy' />
                </ImageListItem>

            })}
        </ImageList>
    </Box>

    )
}
