import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShareMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;
}
