import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GlobalSettingsCountAggregate } from './global-settings-count-aggregate.output';
import { GlobalSettingsMinAggregate } from './global-settings-min-aggregate.output';
import { GlobalSettingsMaxAggregate } from './global-settings-max-aggregate.output';

@ObjectType()
export class GlobalSettingsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => GlobalSettingsCountAggregate, {nullable:true})
    _count?: GlobalSettingsCountAggregate;

    @Field(() => GlobalSettingsMinAggregate, {nullable:true})
    _min?: GlobalSettingsMinAggregate;

    @Field(() => GlobalSettingsMaxAggregate, {nullable:true})
    _max?: GlobalSettingsMaxAggregate;
}
