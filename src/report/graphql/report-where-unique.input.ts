import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportUserIdProductIdCompoundUniqueInput } from './report-user-id-product-id-compound-unique.input';
import { ReportWhereInput } from './report-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class ReportWhereUniqueInput {

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => ReportUserIdProductIdCompoundUniqueInput, {nullable:true})
    userId_productId?: ReportUserIdProductIdCompoundUniqueInput;

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}
