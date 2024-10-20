import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';

@InputType()
export class StateListRelationFilter {

    @Field(() => StateWhereInput, {nullable:true})
    every?: StateWhereInput;

    @Field(() => StateWhereInput, {nullable:true})
    some?: StateWhereInput;

    @Field(() => StateWhereInput, {nullable:true})
    none?: StateWhereInput;
}
