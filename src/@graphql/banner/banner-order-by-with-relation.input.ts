import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class BannerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    imgUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    link?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sorting?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    viewCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    clickCount?: SortOrderInput;
}
