import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutNeighbourhoodInput } from './city-create-without-neighbourhood.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutNeighbourhoodInput } from './city-create-or-connect-without-neighbourhood.input';
import { CityUpsertWithoutNeighbourhoodInput } from './city-upsert-without-neighbourhood.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateToOneWithWhereWithoutNeighbourhoodInput } from './city-update-to-one-with-where-without-neighbourhood.input';

@InputType()
export class CityUpdateOneRequiredWithoutNeighbourhoodNestedInput {

    @Field(() => CityCreateWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityCreateWithoutNeighbourhoodInput)
    create?: CityCreateWithoutNeighbourhoodInput;

    @Field(() => CityCreateOrConnectWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutNeighbourhoodInput)
    connectOrCreate?: CityCreateOrConnectWithoutNeighbourhoodInput;

    @Field(() => CityUpsertWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityUpsertWithoutNeighbourhoodInput)
    upsert?: CityUpsertWithoutNeighbourhoodInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityUpdateToOneWithWhereWithoutNeighbourhoodInput, {nullable:true})
    @Type(() => CityUpdateToOneWithWhereWithoutNeighbourhoodInput)
    update?: CityUpdateToOneWithWhereWithoutNeighbourhoodInput;
}
