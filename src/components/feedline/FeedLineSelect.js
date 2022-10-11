import {useEffect, useState} from 'react';
import axios from 'axios';
import { Divider, Stack } from '@mui/material';
import FeedLine from './FeedLine';

export default function FeedLineSelect(props) {
  const [feed, setFeed] = useState({
    currentPage: 0,
    feeds: [],
    totalElements: 0,
    totalPages: 0
  });

  const getFeedList = (data) => {setFeed({...feed, feeds: data})}

  useEffect(() => {
    axios.get(`/feed`)
      .then(res => setFeed(res.data))
      .catch(error => console.error(error.response))
  }, []);

  return (
    <Stack>
      <Stack spacing={1} width='900px' height='40px' bgcolor='#e7ebf0' margin='0 auto' minWidth='800px'
        direction='row' divider={<Divider orientation='vertical' flexItem />}>
      </Stack>

      <FeedLine
        getUser={props.getUser}
        feed={feed}
        getFeedList={getFeedList}
      />
    </Stack>
  );
}
