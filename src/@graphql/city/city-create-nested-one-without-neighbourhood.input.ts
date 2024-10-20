import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutNeighbourhoodInput } from './city-create-without-neighbourhood.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutNeighbourhoodInput } from './city-create-or-connect-without-neighbourhood.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutNeighbourhoodInput {

    @Field(() => CityCreateWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityCreateWithoutNeighbourhoodInput)
    create?: CityCreateWithoutNeighbourhoodInput;

    @Field(() => CityCreateOrConnectWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutNeighbourhoodInput)
    connectOrCreate?: CityCreateOrConnectWithoutNeighbourhoodInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
