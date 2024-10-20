import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutReportInput } from './product-create-without-report.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutReportInput } from './product-create-or-connect-without-report.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutReportInput {

    @Field(() => ProductCreateWithoutReportInput, {nullable:true})
    @Type(() => ProductCreateWithoutReportInput)
    create?: ProductCreateWithoutReportInput;

    @Field(() => ProductCreateOrConnectWithoutReportInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutReportInput)
    connectOrCreate?: ProductCreateOrConnectWithoutReportInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
