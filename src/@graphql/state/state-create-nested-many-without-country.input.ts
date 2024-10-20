import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutCountryInput } from './state-create-without-country.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutCountryInput } from './state-create-or-connect-without-country.input';
import { StateCreateManyCountryInputEnvelope } from './state-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';

@InputType()
export class StateCreateNestedManyWithoutCountryInput {

    @Field(() => [StateCreateWithoutCountryInput], {nullable:true})
    @Type(() => StateCreateWithoutCountryInput)
    create?: Array<StateCreateWithoutCountryInput>;

    @Field(() => [StateCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => StateCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<StateCreateOrConnectWithoutCountryInput>;

    @Field(() => StateCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => StateCreateManyCountryInputEnvelope)
    createMany?: StateCreateManyCountryInputEnvelope;

    @Field(() => [StateWhereUniqueInput], {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StateWhereUniqueInput, 'id'>>;
}
