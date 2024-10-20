import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutCitiesInput } from './state-create-without-cities.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutCitiesInput } from './state-create-or-connect-without-cities.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';

@InputType()
export class StateCreateNestedOneWithoutCitiesInput {

    @Field(() => StateCreateWithoutCitiesInput, {nullable:true})
    @Type(() => StateCreateWithoutCitiesInput)
    create?: StateCreateWithoutCitiesInput;

    @Field(() => StateCreateOrConnectWithoutCitiesInput, {nullable:true})
    @Type(() => StateCreateOrConnectWithoutCitiesInput)
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput;

    @Field(() => StateWhereUniqueInput, {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;
}
