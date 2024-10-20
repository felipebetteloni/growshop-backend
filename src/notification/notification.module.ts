import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { NotificationResolver } from "./notification.resolver";
import { NotificationService } from "./notification.service";

@Module({
  imports: [PrismaModule],
  providers: [NotificationResolver, NotificationService],
})
export class NotificationModule {}
