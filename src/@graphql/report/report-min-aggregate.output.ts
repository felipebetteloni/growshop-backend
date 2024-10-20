import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReportMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    text?: string;
}
