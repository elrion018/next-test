import { Controller, Get, Query, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Render("feed")
  @Get()
  public index(@Query("name") name?: string) {
    return { name };
  }

  @Render("about")
  @Get("/about")
  public about() {
    return {};
  }
}
