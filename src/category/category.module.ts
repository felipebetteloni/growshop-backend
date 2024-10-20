import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

@Module({
  imports: [PrismaModule],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
