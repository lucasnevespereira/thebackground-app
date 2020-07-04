import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("navBurger") navBurger: ElementRef;
  @ViewChild("navMenu") navMenu: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.classList.toggle("is-active");
  }
}
