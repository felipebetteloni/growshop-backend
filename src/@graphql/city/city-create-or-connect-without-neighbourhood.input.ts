import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutNeighbourhoodInput } from './city-create-without-neighbourhood.input';

@InputType()
export class CityCreateOrConnectWithoutNeighbourhoodInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityCreateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => CityCreateWithoutNeighbourhoodInput)
    create!: CityCreateWithoutNeighbourhoodInput;
}
