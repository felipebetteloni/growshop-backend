import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodCreateInput } from './neighbourhood-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNeighbourhoodArgs {

    @Field(() => NeighbourhoodCreateInput, {nullable:false})
    @Type(() => NeighbourhoodCreateInput)
    data!: NeighbourhoodCreateInput;
}
