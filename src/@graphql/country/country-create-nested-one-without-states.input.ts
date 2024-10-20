import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutStatesInput } from './country-create-without-states.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutStatesInput } from './country-create-or-connect-without-states.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutStatesInput {

    @Field(() => CountryCreateWithoutStatesInput, {nullable:true})
    @Type(() => CountryCreateWithoutStatesInput)
    create?: CountryCreateWithoutStatesInput;

    @Field(() => CountryCreateOrConnectWithoutStatesInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutStatesInput)
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;
}
