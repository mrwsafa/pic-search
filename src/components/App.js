import React, { useState } from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SeachBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const onSerachSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID PsOcGtF3e7hmMJCgCSE7cWJ6gEN7BqXN6RjXMsIGJPI',
      },
    });

    setImages(response.data.results);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          <ImageIcon style={{ fontSize: 30, margin: 5 }} />
          React Pic Seach
        </Typography>
        <SeachBar gonder={onSerachSubmit} />
        <ImageList images={images} />
      </Container>
    </>
  );
};

export default App;