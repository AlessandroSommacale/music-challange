import AlbumCard from '../AlbumCard/AlbumCard';
import { LoadingContainer, Spinner, ErrorMessage, Grid } from './AlbumGrid.styles';
import { useGetTopAlbumsQuery } from '@/store/api/albumsApi';

const AlbumGrid = () => {
  const { data, isLoading, error } = useGetTopAlbumsQuery();

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {error && <ErrorMessage>Error: Failed to load albums</ErrorMessage>}
      {!isLoading && !error && (
        <Grid>
          {(data?.feed?.entry || []).map((album) => (
            <AlbumCard key={album.id?.label} album={album} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default AlbumGrid;
