import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";
export const savePlaceToDatabase = async (place: Place) => {
  const db = await SQLite.openDatabaseAsync("my_favorite_places.db");
  await db.runAsync(
    `CREATE TABLE IF NOT EXISTS places (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            );`
  );
  await db.runAsync(
    `INSERT INTO places (id, title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?, ?);`,
    [
      place.id,
      place.title,
      place.imageUri,
      place.address,
      place.coordinates.lat,
      place.coordinates.lng,
    ]
  );
  console.log("Place saved to database:", place);
};

export const fetchPlacesFromDatabase = async (): Promise<Place[]> => {
  const db = await SQLite.openDatabaseAsync("my_favorite_places.db");
  await db.runAsync(
    `CREATE TABLE IF NOT EXISTS places (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            );`
  );
  const result = await db.getAllAsync(`SELECT * FROM places;`);
  if (!result) {
    return [];
  }
  const places: Place[] = result.map((row: any) => ({
    id: row.id,
    title: row.title,
    imageUri: row.imageUri,
    address: row.address,
    coordinates: {
      lat: row.lat,
      lng: row.lng,
    },
  }));
  return places;
};
export const fetchPlaceByIdFromDatabase = async (
  id: string
): Promise<Place | null> => {
  const db = await SQLite.openDatabaseAsync("my_favorite_places.db");
  await db.runAsync(
    `CREATE TABLE IF NOT EXISTS places (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            );`
  );
  const result: any = await db.getFirstAsync(
    `SELECT * FROM places WHERE id = ?;`,
    [id]
  );
  if (!result) {
    return null;
  }
  const place: Place = {
    id: result.id,
    title: result.title,
    imageUri: result.imageUri,
    address: result.address,
    coordinates: {
      lat: result.lat,
      lng: result.lng,
    },
  };
  return place;
};
