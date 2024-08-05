import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutStateInput } from './city-create-without-state.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutStateInput } from './city-create-or-connect-without-state.input';
import { CityUpsertWithWhereUniqueWithoutStateInput } from './city-upsert-with-where-unique-without-state.input';
import { CityCreateManyStateInputEnvelope } from './city-create-many-state-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithWhereUniqueWithoutStateInput } from './city-update-with-where-unique-without-state.input';
import { CityUpdateManyWithWhereWithoutStateInput } from './city-update-many-with-where-without-state.input';
import { CityScalarWhereInput } from './city-scalar-where.input';

@InputType()
export class CityUpdateManyWithoutStateNestedInput {

    @Field(() => [CityCreateWithoutStateInput], {nullable:true})
    @Type(() => CityCreateWithoutStateInput)
    create?: Array<CityCreateWithoutStateInput>;

    @Field(() => [CityCreateOrConnectWithoutStateInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutStateInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutStateInput>;

    @Field(() => [CityUpsertWithWhereUniqueWithoutStateInput], {nullable:true})
    @Type(() => CityUpsertWithWhereUniqueWithoutStateInput)
    upsert?: Array<CityUpsertWithWhereUniqueWithoutStateInput>;

    @Field(() => CityCreateManyStateInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyStateInputEnvelope)
    createMany?: CityCreateManyStateInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;

    @Field(() => [CityUpdateWithWhereUniqueWithoutStateInput], {nullable:true})
    @Type(() => CityUpdateWithWhereUniqueWithoutStateInput)
    update?: Array<CityUpdateWithWhereUniqueWithoutStateInput>;

    @Field(() => [CityUpdateManyWithWhereWithoutStateInput], {nullable:true})
    @Type(() => CityUpdateManyWithWhereWithoutStateInput)
    updateMany?: Array<CityUpdateManyWithWhereWithoutStateInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    @Type(() => CityScalarWhereInput)
    deleteMany?: Array<CityScalarWhereInput>;
}
