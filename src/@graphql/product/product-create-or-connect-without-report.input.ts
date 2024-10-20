import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutReportInput } from './product-create-without-report.input';

@InputType()
export class ProductCreateOrConnectWithoutReportInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutReportInput, {nullable:false})
    @Type(() => ProductCreateWithoutReportInput)
    create!: ProductCreateWithoutReportInput;
}
