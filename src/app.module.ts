import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PersonController } from './person/person.controller';
import { AppService } from './app.service';
import { PostalCode } from './postal-code/postal-code.entity';
import { PostalCodeModule } from "./postal-code/postal-code.module";
import * as config from "../ormconfig";
import { PersonService } from './person/person.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.default.host,
      port: config.default.port,
      username: config.default.user,
      password: config.default.password,
      database: config.default.schema,
      entities: [PostalCode],
      synchronize: true,
      dropSchema: false
    }), PostalCodeModule
  ],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}