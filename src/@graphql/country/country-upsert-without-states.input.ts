import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutStatesInput } from './country-update-without-states.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutStatesInput } from './country-create-without-states.input';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryUpsertWithoutStatesInput {

    @Field(() => CountryUpdateWithoutStatesInput, {nullable:false})
    @Type(() => CountryUpdateWithoutStatesInput)
    update!: CountryUpdateWithoutStatesInput;

    @Field(() => CountryCreateWithoutStatesInput, {nullable:false})
    @Type(() => CountryCreateWithoutStatesInput)
    create!: CountryCreateWithoutStatesInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}
