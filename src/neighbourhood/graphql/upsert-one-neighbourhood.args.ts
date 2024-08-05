import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateInput } from './neighbourhood-create.input';
import { NeighbourhoodUpdateInput } from './neighbourhood-update.input';

@ArgsType()
export class UpsertOneNeighbourhoodArgs {

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => NeighbourhoodCreateInput, {nullable:false})
    @Type(() => NeighbourhoodCreateInput)
    create!: NeighbourhoodCreateInput;

    @Field(() => NeighbourhoodUpdateInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateInput)
    update!: NeighbourhoodUpdateInput;
}
