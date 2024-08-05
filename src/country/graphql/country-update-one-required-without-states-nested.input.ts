import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutStatesInput } from './country-create-without-states.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutStatesInput } from './country-create-or-connect-without-states.input';
import { CountryUpsertWithoutStatesInput } from './country-upsert-without-states.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateToOneWithWhereWithoutStatesInput } from './country-update-to-one-with-where-without-states.input';

@InputType()
export class CountryUpdateOneRequiredWithoutStatesNestedInput {

    @Field(() => CountryCreateWithoutStatesInput, {nullable:true})
    @Type(() => CountryCreateWithoutStatesInput)
    create?: CountryCreateWithoutStatesInput;

    @Field(() => CountryCreateOrConnectWithoutStatesInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutStatesInput)
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput;

    @Field(() => CountryUpsertWithoutStatesInput, {nullable:true})
    @Type(() => CountryUpsertWithoutStatesInput)
    upsert?: CountryUpsertWithoutStatesInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;

    @Field(() => CountryUpdateToOneWithWhereWithoutStatesInput, {nullable:true})
    @Type(() => CountryUpdateToOneWithWhereWithoutStatesInput)
    update?: CountryUpdateToOneWithWhereWithoutStatesInput;
}
