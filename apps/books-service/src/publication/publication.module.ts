import { Module } from "@nestjs/common";
import { PublicationModuleBase } from "./base/publication.module.base";
import { PublicationService } from "./publication.service";
import { PublicationController } from "./publication.controller";

@Module({
  imports: [PublicationModuleBase],
  controllers: [PublicationController],
  providers: [PublicationService],
  exports: [PublicationService],
})
export class PublicationModule {}
