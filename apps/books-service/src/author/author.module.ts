import { Module } from "@nestjs/common";
import { AuthorModuleBase } from "./base/author.module.base";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";

@Module({
  imports: [AuthorModuleBase],
  controllers: [AuthorController],
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
