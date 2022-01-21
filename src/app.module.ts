import {
  ConfigModule,
  Module,
  ScheduleModule,
  ymlConfiguration,
  ZumCacheModule,
} from "@zum-front-core/backend";
import { RenderModule } from "nest-next";
import Next from "next";

import { AppController } from "./app.controller";

const Config = ConfigModule.forRoot({
  load: [
    ymlConfiguration("application.yml"),
    ymlConfiguration("internalApi.yml"),
  ],
  isGlobal: true,
});

const GlobalRenderModule = RenderModule.forRootAsync(
  Next({
    dev: !["production", "production-local"].includes(process.env.NODE_ENV),
    conf: { useFilesystemPublicRoutes: false } as any,
  })
);

const Schedule = ScheduleModule.forRoot();
const ZumCache = ZumCacheModule.forRoot();

@Module({
  imports: [Config, GlobalRenderModule, Schedule, ZumCache],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
