import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryUpdateWithoutStatesInput } from './country-update-without-states.input';

@InputType()
export class CountryUpdateToOneWithWhereWithoutStatesInput {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => CountryUpdateWithoutStatesInput, {nullable:false})
    @Type(() => CountryUpdateWithoutStatesInput)
    data!: CountryUpdateWithoutStatesInput;
}
