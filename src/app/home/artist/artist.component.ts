import { Component, OnInit } from "@angular/core";
import { ArtistService } from "src/app/shared/services/artist.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"],
})
export class ArtistComponent implements OnInit {
  term: string;
  p: number = 1;
  artists = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getAllArtists().subscribe((response) => {
      this.artists = response;
    });
  }
}
