import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BannerAvgAggregate {

    @Field(() => Float, {nullable:true})
    sorting?: number;

    @Field(() => Float, {nullable:true})
    viewCount?: number;

    @Field(() => Float, {nullable:true})
    clickCount?: number;
}
