import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FavoriteUserIdProductIdCompoundUniqueInput } from './favorite-user-id-product-id-compound-unique.input';
import { FavoriteWhereInput } from './favorite-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class FavoriteWhereUniqueInput {

    @Field(() => FavoriteUserIdProductIdCompoundUniqueInput, {nullable:true})
    userId_productId?: FavoriteUserIdProductIdCompoundUniqueInput;

    @Field(() => [FavoriteWhereInput], {nullable:true})
    AND?: Array<FavoriteWhereInput>;

    @Field(() => [FavoriteWhereInput], {nullable:true})
    OR?: Array<FavoriteWhereInput>;

    @Field(() => [FavoriteWhereInput], {nullable:true})
    NOT?: Array<FavoriteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}
