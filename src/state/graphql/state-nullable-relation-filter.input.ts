import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';

@InputType()
export class StateNullableRelationFilter {

    @Field(() => StateWhereInput, {nullable:true})
    is?: StateWhereInput;

    @Field(() => StateWhereInput, {nullable:true})
    isNot?: StateWhereInput;
}
