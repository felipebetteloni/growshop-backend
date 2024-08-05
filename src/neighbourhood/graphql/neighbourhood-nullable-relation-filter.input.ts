import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';

@InputType()
export class NeighbourhoodNullableRelationFilter {

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    is?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    isNot?: NeighbourhoodWhereInput;
}
