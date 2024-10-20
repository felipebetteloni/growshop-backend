import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';

@InputType()
export class ReviewImgOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imgUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: ReviewOrderByWithRelationInput;
}
