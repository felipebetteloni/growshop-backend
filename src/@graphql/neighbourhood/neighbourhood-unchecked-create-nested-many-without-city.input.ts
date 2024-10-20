import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateWithoutCityInput } from './neighbourhood-create-without-city.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateOrConnectWithoutCityInput } from './neighbourhood-create-or-connect-without-city.input';
import { NeighbourhoodCreateManyCityInputEnvelope } from './neighbourhood-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';

@InputType()
export class NeighbourhoodUncheckedCreateNestedManyWithoutCityInput {

    @Field(() => [NeighbourhoodCreateWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodCreateWithoutCityInput)
    create?: Array<NeighbourhoodCreateWithoutCityInput>;

    @Field(() => [NeighbourhoodCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<NeighbourhoodCreateOrConnectWithoutCityInput>;

    @Field(() => NeighbourhoodCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => NeighbourhoodCreateManyCityInputEnvelope)
    createMany?: NeighbourhoodCreateManyCityInputEnvelope;

    @Field(() => [NeighbourhoodWhereUniqueInput], {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>>;
}
