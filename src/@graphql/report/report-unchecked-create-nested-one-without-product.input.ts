import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutProductInput } from './report-create-without-product.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutProductInput } from './report-create-or-connect-without-product.input';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportUncheckedCreateNestedOneWithoutProductInput {

    @Field(() => ReportCreateWithoutProductInput, {nullable:true})
    @Type(() => ReportCreateWithoutProductInput)
    create?: ReportCreateWithoutProductInput;

    @Field(() => ReportCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => ReportCreateOrConnectWithoutProductInput)
    connectOrCreate?: ReportCreateOrConnectWithoutProductInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    connect?: Prisma.AtLeast<ReportWhereUniqueInput, 'productId' | 'userId_productId'>;
}
