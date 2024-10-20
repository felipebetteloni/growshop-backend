import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FavoriteCountAggregate } from './favorite-count-aggregate.output';
import { FavoriteMinAggregate } from './favorite-min-aggregate.output';
import { FavoriteMaxAggregate } from './favorite-max-aggregate.output';

@ObjectType()
export class FavoriteGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => FavoriteCountAggregate, {nullable:true})
    _count?: FavoriteCountAggregate;

    @Field(() => FavoriteMinAggregate, {nullable:true})
    _min?: FavoriteMinAggregate;

    @Field(() => FavoriteMaxAggregate, {nullable:true})
    _max?: FavoriteMaxAggregate;
}
