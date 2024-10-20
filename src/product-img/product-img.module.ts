import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ProductImgResolver } from "./product-img.resolver";
import { ProductImgService } from "./product-img.service";

@Module({
  imports: [PrismaModule],
  providers: [ProductImgResolver, ProductImgService],
})
export class ProductImgModule {}
