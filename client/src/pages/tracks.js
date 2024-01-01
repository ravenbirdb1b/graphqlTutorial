import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

const TRACKS = gql`
query getTracks {
  tracks {
    id
    title
    author {
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}

`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading,error,data} = useQuery(TRACKS);

  return <Layout grid><QueryResult error={error} loading={loading} data={data}>
    {data?.tracks?.map((spaceCat,idx) =><TrackCard key={idx} track={spaceCat} />)}
    </QueryResult></Layout>;
};

export default Tracks;
