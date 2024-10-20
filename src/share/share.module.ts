import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ShareResolver } from "./share.resolver";
import { ShareService } from "./share.service";

@Module({
  imports: [PrismaModule],
  providers: [ShareResolver, ShareService],
})
export class ShareModule {}
