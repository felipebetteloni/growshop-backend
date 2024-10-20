import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';

@InputType()
export class ProductImgOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imgUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;
}
