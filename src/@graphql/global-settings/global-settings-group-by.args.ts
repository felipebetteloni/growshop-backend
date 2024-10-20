import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsWhereInput } from './global-settings-where.input';
import { Type } from 'class-transformer';
import { GlobalSettingsOrderByWithAggregationInput } from './global-settings-order-by-with-aggregation.input';
import { GlobalSettingsScalarFieldEnum } from './global-settings-scalar-field.enum';
import { GlobalSettingsScalarWhereWithAggregatesInput } from './global-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GlobalSettingsCountAggregateInput } from './global-settings-count-aggregate.input';
import { GlobalSettingsMinAggregateInput } from './global-settings-min-aggregate.input';
import { GlobalSettingsMaxAggregateInput } from './global-settings-max-aggregate.input';

@ArgsType()
export class GlobalSettingsGroupByArgs {

    @Field(() => GlobalSettingsWhereInput, {nullable:true})
    @Type(() => GlobalSettingsWhereInput)
    where?: GlobalSettingsWhereInput;

    @Field(() => [GlobalSettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GlobalSettingsOrderByWithAggregationInput>;

    @Field(() => [GlobalSettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GlobalSettingsScalarFieldEnum>;

    @Field(() => GlobalSettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: GlobalSettingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GlobalSettingsCountAggregateInput, {nullable:true})
    _count?: GlobalSettingsCountAggregateInput;

    @Field(() => GlobalSettingsMinAggregateInput, {nullable:true})
    _min?: GlobalSettingsMinAggregateInput;

    @Field(() => GlobalSettingsMaxAggregateInput, {nullable:true})
    _max?: GlobalSettingsMaxAggregateInput;
}
