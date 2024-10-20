import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodCreateManyInput } from './neighbourhood-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNeighbourhoodArgs {

    @Field(() => [NeighbourhoodCreateManyInput], {nullable:false})
    @Type(() => NeighbourhoodCreateManyInput)
    data!: Array<NeighbourhoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
