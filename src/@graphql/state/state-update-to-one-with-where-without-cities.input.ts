import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';
import { Type } from 'class-transformer';
import { StateUpdateWithoutCitiesInput } from './state-update-without-cities.input';

@InputType()
export class StateUpdateToOneWithWhereWithoutCitiesInput {

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;

    @Field(() => StateUpdateWithoutCitiesInput, {nullable:false})
    @Type(() => StateUpdateWithoutCitiesInput)
    data!: StateUpdateWithoutCitiesInput;
}
