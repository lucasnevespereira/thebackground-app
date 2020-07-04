import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";
import { PopularArtistsComponent } from "./popular-artists/popular-artists.component";
import { ArtistDetailComponent } from "./artist-detail/artist-detail.component";
import { ArtistComponent } from "./artist/artist.component";
import { SharedModule } from "../shared/shared.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "artist", component: ArtistComponent },
  { path: "artist/:id", component: ArtistDetailComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    PopularArtistsComponent,
    ArtistDetailComponent,
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class HomeModule {}
