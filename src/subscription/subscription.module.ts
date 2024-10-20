import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SubscriptionResolver } from "./subscription.resolver";
import { SubscriptionService } from "./subscription.service";

@Module({
  imports: [PrismaModule],
  providers: [SubscriptionResolver, SubscriptionService],
})
export class SubscriptionModule {}
