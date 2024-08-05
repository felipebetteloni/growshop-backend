import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodScalarWhereInput } from './neighbourhood-scalar-where.input';
import { Type } from 'class-transformer';
import { NeighbourhoodUpdateManyMutationInput } from './neighbourhood-update-many-mutation.input';

@InputType()
export class NeighbourhoodUpdateManyWithWhereWithoutCityInput {

    @Field(() => NeighbourhoodScalarWhereInput, {nullable:false})
    @Type(() => NeighbourhoodScalarWhereInput)
    where!: NeighbourhoodScalarWhereInput;

    @Field(() => NeighbourhoodUpdateManyMutationInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateManyMutationInput)
    data!: NeighbourhoodUpdateManyMutationInput;
}
