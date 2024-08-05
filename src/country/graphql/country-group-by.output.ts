import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCountAggregate } from './country-count-aggregate.output';
import { CountryMinAggregate } from './country-min-aggregate.output';
import { CountryMaxAggregate } from './country-max-aggregate.output';

@ObjectType()
export class CountryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: CountryCountAggregate;

    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: CountryMinAggregate;

    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: CountryMaxAggregate;
}
