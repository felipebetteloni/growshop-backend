import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { MessageResolver } from "./message.resolver";
import { MessageService } from "./message.service";

@Module({
  imports: [PrismaModule],
  providers: [MessageResolver, MessageService],
})
export class MessageModule {}
