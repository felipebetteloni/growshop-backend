import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShareCountAggregate } from './share-count-aggregate.output';
import { ShareMinAggregate } from './share-min-aggregate.output';
import { ShareMaxAggregate } from './share-max-aggregate.output';

@ObjectType()
export class ShareGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => ShareCountAggregate, {nullable:true})
    _count?: ShareCountAggregate;

    @Field(() => ShareMinAggregate, {nullable:true})
    _min?: ShareMinAggregate;

    @Field(() => ShareMaxAggregate, {nullable:true})
    _max?: ShareMaxAggregate;
}
