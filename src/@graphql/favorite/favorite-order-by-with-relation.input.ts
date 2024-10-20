import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';

@InputType()
export class FavoriteOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;
}
