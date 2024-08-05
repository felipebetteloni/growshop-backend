import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Type } from 'class-transformer';
import { NeighbourhoodUpdateWithoutCityInput } from './neighbourhood-update-without-city.input';

@InputType()
export class NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => NeighbourhoodUpdateWithoutCityInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateWithoutCityInput)
    data!: NeighbourhoodUpdateWithoutCityInput;
}
