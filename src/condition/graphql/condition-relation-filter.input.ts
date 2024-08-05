import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';

@InputType()
export class ConditionRelationFilter {

    @Field(() => ConditionWhereInput, {nullable:true})
    is?: ConditionWhereInput;

    @Field(() => ConditionWhereInput, {nullable:true})
    isNot?: ConditionWhereInput;
}
