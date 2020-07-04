import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { BannerComponent } from './banner/banner.component';
import { PopularArtistsComponent } from './popular-artists/popular-artists.component';

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, BannerComponent, PopularArtistsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
