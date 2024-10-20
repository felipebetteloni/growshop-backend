import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutCitiesInput } from './state-create-without-cities.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutCitiesInput } from './state-create-or-connect-without-cities.input';
import { StateUpsertWithoutCitiesInput } from './state-upsert-without-cities.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { StateUpdateToOneWithWhereWithoutCitiesInput } from './state-update-to-one-with-where-without-cities.input';

@InputType()
export class StateUpdateOneRequiredWithoutCitiesNestedInput {

    @Field(() => StateCreateWithoutCitiesInput, {nullable:true})
    @Type(() => StateCreateWithoutCitiesInput)
    create?: StateCreateWithoutCitiesInput;

    @Field(() => StateCreateOrConnectWithoutCitiesInput, {nullable:true})
    @Type(() => StateCreateOrConnectWithoutCitiesInput)
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput;

    @Field(() => StateUpsertWithoutCitiesInput, {nullable:true})
    @Type(() => StateUpsertWithoutCitiesInput)
    upsert?: StateUpsertWithoutCitiesInput;

    @Field(() => StateWhereUniqueInput, {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateUpdateToOneWithWhereWithoutCitiesInput, {nullable:true})
    @Type(() => StateUpdateToOneWithWhereWithoutCitiesInput)
    update?: StateUpdateToOneWithWhereWithoutCitiesInput;
}
