import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutReportInput } from './product-create-without-report.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutReportInput } from './product-create-or-connect-without-report.input';
import { ProductUpsertWithoutReportInput } from './product-upsert-without-report.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutReportInput } from './product-update-to-one-with-where-without-report.input';

@InputType()
export class ProductUpdateOneRequiredWithoutReportNestedInput {

    @Field(() => ProductCreateWithoutReportInput, {nullable:true})
    @Type(() => ProductCreateWithoutReportInput)
    create?: ProductCreateWithoutReportInput;

    @Field(() => ProductCreateOrConnectWithoutReportInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutReportInput)
    connectOrCreate?: ProductCreateOrConnectWithoutReportInput;

    @Field(() => ProductUpsertWithoutReportInput, {nullable:true})
    @Type(() => ProductUpsertWithoutReportInput)
    upsert?: ProductUpsertWithoutReportInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutReportInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutReportInput)
    update?: ProductUpdateToOneWithWhereWithoutReportInput;
}
