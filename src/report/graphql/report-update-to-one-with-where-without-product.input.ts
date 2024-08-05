import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';
import { Type } from 'class-transformer';
import { ReportUpdateWithoutProductInput } from './report-update-without-product.input';

@InputType()
export class ReportUpdateToOneWithWhereWithoutProductInput {

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;

    @Field(() => ReportUpdateWithoutProductInput, {nullable:false})
    @Type(() => ReportUpdateWithoutProductInput)
    data!: ReportUpdateWithoutProductInput;
}
