import { Component, OnInit } from "@angular/core";
import { ArtistService } from "src/app/shared/services/artist.service";

@Component({
  selector: "app-popular-artists",
  templateUrl: "./popular-artists.component.html",
  styleUrls: ["./popular-artists.component.scss"],
})
export class PopularArtistsComponent implements OnInit {
  popularArtist = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    // this.artistService.getAllArtists().subscribe((response) => {
    //   console.log(`
    //     GET First Artist Name in RESPONSE:
    //     ${response[0]["Name"]}
    //   `);
    //   this.popularArtist = response;
    // });

    this.artistService.getAllArtists().subscribe((response) => {
      this.popularArtist = response;
    });
  }
}
