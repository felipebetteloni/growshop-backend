import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateWithoutCityInput } from './neighbourhood-create-without-city.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateOrConnectWithoutCityInput } from './neighbourhood-create-or-connect-without-city.input';
import { NeighbourhoodUpsertWithWhereUniqueWithoutCityInput } from './neighbourhood-upsert-with-where-unique-without-city.input';
import { NeighbourhoodCreateManyCityInputEnvelope } from './neighbourhood-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { NeighbourhoodUpdateWithWhereUniqueWithoutCityInput } from './neighbourhood-update-with-where-unique-without-city.input';
import { NeighbourhoodUpdateManyWithWhereWithoutCityInput } from './neighbourhood-update-many-with-where-without-city.input';
import { NeighbourhoodScalarWhereInput } from './neighbourhood-scalar-where.input';

@InputType()
export class NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput {

    @Field(() => [NeighbourhoodCreateWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodCreateWithoutCityInput)
    create?: Array<NeighbourhoodCreateWithoutCityInput>;

    @Field(() => [NeighbourhoodCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<NeighbourhoodCreateOrConnectWithoutCityInput>;

    @Field(() => [NeighbourhoodUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<NeighbourhoodUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => NeighbourhoodCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => NeighbourhoodCreateManyCityInputEnvelope)
    createMany?: NeighbourhoodCreateManyCityInputEnvelope;

    @Field(() => [NeighbourhoodWhereUniqueInput], {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>>;

    @Field(() => [NeighbourhoodWhereUniqueInput], {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>>;

    @Field(() => [NeighbourhoodWhereUniqueInput], {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>>;

    @Field(() => [NeighbourhoodWhereUniqueInput], {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>>;

    @Field(() => [NeighbourhoodUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<NeighbourhoodUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [NeighbourhoodUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => NeighbourhoodUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<NeighbourhoodUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [NeighbourhoodScalarWhereInput], {nullable:true})
    @Type(() => NeighbourhoodScalarWhereInput)
    deleteMany?: Array<NeighbourhoodScalarWhereInput>;
}
