import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';
import { Type } from 'class-transformer';
import { NeighbourhoodOrderByWithRelationInput } from './neighbourhood-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NeighbourhoodScalarFieldEnum } from './neighbourhood-scalar-field.enum';

@ArgsType()
export class FindManyNeighbourhoodArgs {

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    where?: NeighbourhoodWhereInput;

    @Field(() => [NeighbourhoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NeighbourhoodOrderByWithRelationInput>;

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NeighbourhoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NeighbourhoodScalarFieldEnum>;
}
