import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
})
export class SearchbarComponent implements OnInit {
  @Input() placeholder: string;

  constructor() {}

  ngOnInit(): void {}
}
