import { Component } from "@angular/core";
import { HeroComponent } from "../../../../component/src/components";

@Component({
  selector: "page-blog",
  imports: [HeroComponent],
  template: ` <component-hero /> `,
  styles: ``,
})
export class BlogPage {}
