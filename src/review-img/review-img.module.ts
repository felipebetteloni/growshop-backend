import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ReviewImgResolver } from "./review-img.resolver";
import { ReviewImgService } from "./review-img.service";

@Module({
  imports: [PrismaModule],
  providers: [ReviewImgResolver, ReviewImgService],
})
export class ReviewImgModule {}
