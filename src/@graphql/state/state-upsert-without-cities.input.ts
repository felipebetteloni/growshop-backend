import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateUpdateWithoutCitiesInput } from './state-update-without-cities.input';
import { Type } from 'class-transformer';
import { StateCreateWithoutCitiesInput } from './state-create-without-cities.input';
import { StateWhereInput } from './state-where.input';

@InputType()
export class StateUpsertWithoutCitiesInput {

    @Field(() => StateUpdateWithoutCitiesInput, {nullable:false})
    @Type(() => StateUpdateWithoutCitiesInput)
    update!: StateUpdateWithoutCitiesInput;

    @Field(() => StateCreateWithoutCitiesInput, {nullable:false})
    @Type(() => StateCreateWithoutCitiesInput)
    create!: StateCreateWithoutCitiesInput;

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;
}
