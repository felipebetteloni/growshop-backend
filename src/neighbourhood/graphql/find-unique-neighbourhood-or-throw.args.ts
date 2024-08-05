import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNeighbourhoodOrThrowArgs {

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;
}
