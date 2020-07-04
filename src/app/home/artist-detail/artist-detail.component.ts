import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistService } from "src/app/shared/services/artist.service";

@Component({
  selector: "app-artist-detail",
  templateUrl: "./artist-detail.component.html",
  styleUrls: ["./artist-detail.component.scss"],
})
export class ArtistDetailComponent implements OnInit {
  artistDetails = [];

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit() {
    const { id } = this.route.params["value"];
    this.artistService.getArtist(id).subscribe((response) => {
      console.log(response);
      this.artistDetails.push(response);
    });
  }
}
