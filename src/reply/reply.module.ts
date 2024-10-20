import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ReplyResolver } from "./reply.resolver";
import { ReplyService } from "./reply.service";

@Module({
  imports: [PrismaModule],
  providers: [ReplyResolver, ReplyService],
})
export class ReplyModule {}
