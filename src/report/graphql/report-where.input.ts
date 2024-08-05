import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user-old/user-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class ReportWhereInput {

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}
