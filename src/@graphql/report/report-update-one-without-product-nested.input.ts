import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutProductInput } from './report-create-without-product.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutProductInput } from './report-create-or-connect-without-product.input';
import { ReportUpsertWithoutProductInput } from './report-upsert-without-product.input';
import { ReportWhereInput } from './report-where.input';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateToOneWithWhereWithoutProductInput } from './report-update-to-one-with-where-without-product.input';

@InputType()
export class ReportUpdateOneWithoutProductNestedInput {

    @Field(() => ReportCreateWithoutProductInput, {nullable:true})
    @Type(() => ReportCreateWithoutProductInput)
    create?: ReportCreateWithoutProductInput;

    @Field(() => ReportCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => ReportCreateOrConnectWithoutProductInput)
    connectOrCreate?: ReportCreateOrConnectWithoutProductInput;

    @Field(() => ReportUpsertWithoutProductInput, {nullable:true})
    @Type(() => ReportUpsertWithoutProductInput)
    upsert?: ReportUpsertWithoutProductInput;

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    disconnect?: ReportWhereInput;

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    delete?: ReportWhereInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    connect?: Prisma.AtLeast<ReportWhereUniqueInput, 'productId' | 'userId_productId'>;

    @Field(() => ReportUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => ReportUpdateToOneWithWhereWithoutProductInput)
    update?: ReportUpdateToOneWithWhereWithoutProductInput;
}
