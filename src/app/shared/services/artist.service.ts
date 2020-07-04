import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface ArtistResponse {
  id: string;
  Name: string;
  Description: string;
  photo: {
    url: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class ArtistService {
  rootUrl: string = "http://localhost:1337/";

  constructor(private http: HttpClient) {}

  getAllArtists() {
    return this.http.get<ArtistResponse[]>(`${this.rootUrl}artistes`);
  }

  getArtist(id: string) {
    return this.http.get<ArtistResponse[]>(`${this.rootUrl}artistes/${id}`);
  }
}
