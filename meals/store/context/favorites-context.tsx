import React, { createContext, ReactNode, useState } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};
const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((currentFavIds) =>
      currentFavIds.filter((favId) => favId !== id)
    );
  };

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const value: FavoritesContextType = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
