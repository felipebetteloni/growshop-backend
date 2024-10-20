import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SubCategoryResolver } from "./sub-category.resolver";
import { SubCategoryService } from "./sub-category.service";

@Module({
  imports: [PrismaModule],
  providers: [SubCategoryResolver, SubCategoryService],
})
export class SubCategoryModule {}
