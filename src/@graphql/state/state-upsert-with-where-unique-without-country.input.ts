import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Type } from 'class-transformer';
import { StateUpdateWithoutCountryInput } from './state-update-without-country.input';
import { StateCreateWithoutCountryInput } from './state-create-without-country.input';

@InputType()
export class StateUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateUpdateWithoutCountryInput, {nullable:false})
    @Type(() => StateUpdateWithoutCountryInput)
    update!: StateUpdateWithoutCountryInput;

    @Field(() => StateCreateWithoutCountryInput, {nullable:false})
    @Type(() => StateCreateWithoutCountryInput)
    create!: StateCreateWithoutCountryInput;
}
