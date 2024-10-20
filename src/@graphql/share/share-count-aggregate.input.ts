import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShareCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    productId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
