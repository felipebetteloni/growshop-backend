import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportCreateWithoutProductInput } from './report-create-without-product.input';

@InputType()
export class ReportCreateOrConnectWithoutProductInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    @Type(() => ReportWhereUniqueInput)
    where!: Prisma.AtLeast<ReportWhereUniqueInput, 'productId' | 'userId_productId'>;

    @Field(() => ReportCreateWithoutProductInput, {nullable:false})
    @Type(() => ReportCreateWithoutProductInput)
    create!: ReportCreateWithoutProductInput;
}
