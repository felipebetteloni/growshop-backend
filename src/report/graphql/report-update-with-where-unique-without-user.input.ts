import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportUpdateWithoutUserInput } from './report-update-without-user.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    @Type(() => ReportWhereUniqueInput)
    where!: Prisma.AtLeast<ReportWhereUniqueInput, 'productId' | 'userId_productId'>;

    @Field(() => ReportUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReportUpdateWithoutUserInput)
    data!: ReportUpdateWithoutUserInput;
}
