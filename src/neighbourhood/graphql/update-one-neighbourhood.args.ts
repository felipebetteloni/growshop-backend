import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodUpdateInput } from './neighbourhood-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';

@ArgsType()
export class UpdateOneNeighbourhoodArgs {

    @Field(() => NeighbourhoodUpdateInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateInput)
    data!: NeighbourhoodUpdateInput;

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;
}
