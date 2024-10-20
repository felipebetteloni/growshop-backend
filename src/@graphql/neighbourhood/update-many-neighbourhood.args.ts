import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodUpdateManyMutationInput } from './neighbourhood-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';

@ArgsType()
export class UpdateManyNeighbourhoodArgs {

    @Field(() => NeighbourhoodUpdateManyMutationInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateManyMutationInput)
    data!: NeighbourhoodUpdateManyMutationInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    where?: NeighbourhoodWhereInput;
}
