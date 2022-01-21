import { AppModule } from "./app.module";
import * as path from "path";
import { NestApplicationOptions } from "@zum-front-core/backend";
import { AppContainer } from "./app.container";

require("@zum-front-core/banner");

async function main(): Promise<void> {
  const nestApplicationOptions: NestApplicationOptions = {};

  if ((process.env.NODE_ENV as string) === "production-qa") {
    const ssl = require("https-localhost")("local-start.zum.com");
    nestApplicationOptions.httpsOptions = await ssl.getCerts();
  }

  await new AppContainer().setup(
    AppModule,
    {
      resourcePath: path.join(process.env.INIT_CWD as string, "resources"),
    },
    nestApplicationOptions
  );
}

main();
