import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BannerSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sorting?: true;

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;

    @Field(() => Boolean, {nullable:true})
    clickCount?: true;
}
