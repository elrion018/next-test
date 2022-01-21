import {
  BaseAppContainer,
  ConfigService,
  logger,
  NestExpressApplication,
  ValidationPipe,
} from "@zum-front-core/backend";

const chalk = require("chalk");

export class AppContainer extends BaseAppContainer {

  /**
   * 서버 시작 메소드
   * @param app NestJS로 만들어진 application instance
   */
  public listen(app: NestExpressApplication): Promise<void> {

    /** @see {https://docs.nestjs.com/techniques/validation} **/
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    const configService = app.get(ConfigService);
    const port = Number(configService.get("port")) || 8080;
    return app.listen(port, () => {
      logger.info(`${chalk.bgYellow(process.env.NODE_ENV)} - ${chalk.bgGreen(process.env.ZUM_BACK_MODE)} Startup!`);
    });
  }

}