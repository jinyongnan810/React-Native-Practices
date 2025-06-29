export type Place = {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
