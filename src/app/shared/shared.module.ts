import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from "./components/card/card.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CardComponent, SearchbarComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [CardComponent, SearchbarComponent],
})
export class SharedModule {}
