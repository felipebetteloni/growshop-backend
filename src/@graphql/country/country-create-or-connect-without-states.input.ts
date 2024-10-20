import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutStatesInput } from './country-create-without-states.input';

@InputType()
export class CountryCreateOrConnectWithoutStatesInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;

    @Field(() => CountryCreateWithoutStatesInput, {nullable:false})
    @Type(() => CountryCreateWithoutStatesInput)
    create!: CountryCreateWithoutStatesInput;
}
