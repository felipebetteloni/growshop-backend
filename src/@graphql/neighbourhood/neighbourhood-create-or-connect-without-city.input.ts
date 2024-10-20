import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateWithoutCityInput } from './neighbourhood-create-without-city.input';

@InputType()
export class NeighbourhoodCreateOrConnectWithoutCityInput {

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => NeighbourhoodCreateWithoutCityInput, {nullable:false})
    @Type(() => NeighbourhoodCreateWithoutCityInput)
    create!: NeighbourhoodCreateWithoutCityInput;
}
