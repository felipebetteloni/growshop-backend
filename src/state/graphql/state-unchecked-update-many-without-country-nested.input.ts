import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutCountryInput } from './state-create-without-country.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutCountryInput } from './state-create-or-connect-without-country.input';
import { StateUpsertWithWhereUniqueWithoutCountryInput } from './state-upsert-with-where-unique-without-country.input';
import { StateCreateManyCountryInputEnvelope } from './state-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { StateUpdateWithWhereUniqueWithoutCountryInput } from './state-update-with-where-unique-without-country.input';
import { StateUpdateManyWithWhereWithoutCountryInput } from './state-update-many-with-where-without-country.input';
import { StateScalarWhereInput } from './state-scalar-where.input';

@InputType()
export class StateUncheckedUpdateManyWithoutCountryNestedInput {

    @Field(() => [StateCreateWithoutCountryInput], {nullable:true})
    @Type(() => StateCreateWithoutCountryInput)
    create?: Array<StateCreateWithoutCountryInput>;

    @Field(() => [StateCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => StateCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<StateCreateOrConnectWithoutCountryInput>;

    @Field(() => [StateUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => StateUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<StateUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => StateCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => StateCreateManyCountryInputEnvelope)
    createMany?: StateCreateManyCountryInputEnvelope;

    @Field(() => [StateWhereUniqueInput], {nullable:true})
    @Type(() => StateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<StateWhereUniqueInput, 'id'>>;

    @Field(() => [StateWhereUniqueInput], {nullable:true})
    @Type(() => StateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<StateWhereUniqueInput, 'id'>>;

    @Field(() => [StateWhereUniqueInput], {nullable:true})
    @Type(() => StateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<StateWhereUniqueInput, 'id'>>;

    @Field(() => [StateWhereUniqueInput], {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StateWhereUniqueInput, 'id'>>;

    @Field(() => [StateUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => StateUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<StateUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [StateUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => StateUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<StateUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [StateScalarWhereInput], {nullable:true})
    @Type(() => StateScalarWhereInput)
    deleteMany?: Array<StateScalarWhereInput>;
}
