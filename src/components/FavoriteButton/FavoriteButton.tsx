import Heart from '../../../public/heart.svg';
import { Spinner } from '../AlbumGrid/AlbumGrid.styles';
import { FavoriteButtonContainer } from './FavoriteButton.styles';
import { useGetUserFavoritesQuery, useSetUserFavoritesMutation } from '@/store/api/firebaseApi';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const FavoriteButton = ({ albumId }: { albumId: string }) => {
  const user = useSelector((state: RootState) => state.user);
  const { data: favoriteAlbums } = useGetUserFavoritesQuery({ userId: user.localId }, { skip: !user.localId });
  const [setUserFavorites, { isLoading, error }] = useSetUserFavoritesMutation();
  const isInFavorites = !!favoriteAlbums?.find((e) => albumId === e);

  useEffect(() => {
    if (error) {
      window.alert('Unable to add album to favorites, please try again later');
    }
  }, [error]);

  const updateFavorites = async (element: string, action: 'add' | 'remove') => {
    let newFavorites: string[];
    if (action === 'add') {
      newFavorites = [...(favoriteAlbums || []), element];
    } else {
      newFavorites = (favoriteAlbums || []).filter((e) => e !== element);
    }
    await setUserFavorites({
      userId: user.localId,
      favorites: newFavorites,
    });
  };

  return (
    <>
      {user.localId &&
        (isInFavorites ? (
          <FavoriteButtonContainer
            onClick={(e) => {
              if (albumId) {
                e.preventDefault();
                updateFavorites(albumId, 'remove');
              }
            }}
          >
            <Heart fill="red" />
            <span className="sr-only">Remove from favorites</span>
          </FavoriteButtonContainer>
        ) : (
          <FavoriteButtonContainer
            onClick={(e) => {
              if (albumId) {
                e.preventDefault();
                updateFavorites(albumId, 'add');
              }
            }}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Heart fill="lightgray" />
                <span className="sr-only">Add to favorites</span>
              </>
            )}
          </FavoriteButtonContainer>
        ))}
    </>
  );
};

export default FavoriteButton;
