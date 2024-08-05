import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BannerAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sorting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clickCount?: keyof typeof SortOrder;
}
