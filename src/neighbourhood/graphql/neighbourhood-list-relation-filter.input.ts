import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';

@InputType()
export class NeighbourhoodListRelationFilter {

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    every?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    some?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    none?: NeighbourhoodWhereInput;
}
