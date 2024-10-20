import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ReportScalarWhereInput {

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    AND?: Array<ReportScalarWhereInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    OR?: Array<ReportScalarWhereInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    NOT?: Array<ReportScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;
}
