import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class ShareWhereInput {

    @Field(() => [ShareWhereInput], {nullable:true})
    AND?: Array<ShareWhereInput>;

    @Field(() => [ShareWhereInput], {nullable:true})
    OR?: Array<ShareWhereInput>;

    @Field(() => [ShareWhereInput], {nullable:true})
    NOT?: Array<ShareWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}
