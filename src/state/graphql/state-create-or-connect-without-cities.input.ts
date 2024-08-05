import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Type } from 'class-transformer';
import { StateCreateWithoutCitiesInput } from './state-create-without-cities.input';

@InputType()
export class StateCreateOrConnectWithoutCitiesInput {

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateCreateWithoutCitiesInput, {nullable:false})
    @Type(() => StateCreateWithoutCitiesInput)
    create!: StateCreateWithoutCitiesInput;
}
