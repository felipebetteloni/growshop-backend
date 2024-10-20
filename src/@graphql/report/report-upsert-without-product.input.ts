import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportUpdateWithoutProductInput } from './report-update-without-product.input';
import { Type } from 'class-transformer';
import { ReportCreateWithoutProductInput } from './report-create-without-product.input';
import { ReportWhereInput } from './report-where.input';

@InputType()
export class ReportUpsertWithoutProductInput {

    @Field(() => ReportUpdateWithoutProductInput, {nullable:false})
    @Type(() => ReportUpdateWithoutProductInput)
    update!: ReportUpdateWithoutProductInput;

    @Field(() => ReportCreateWithoutProductInput, {nullable:false})
    @Type(() => ReportCreateWithoutProductInput)
    create!: ReportCreateWithoutProductInput;

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;
}
