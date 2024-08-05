import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutStateInput } from './city-create-without-state.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutStateInput } from './city-create-or-connect-without-state.input';
import { CityCreateManyStateInputEnvelope } from './city-create-many-state-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedManyWithoutStateInput {

    @Field(() => [CityCreateWithoutStateInput], {nullable:true})
    @Type(() => CityCreateWithoutStateInput)
    create?: Array<CityCreateWithoutStateInput>;

    @Field(() => [CityCreateOrConnectWithoutStateInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutStateInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutStateInput>;

    @Field(() => CityCreateManyStateInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyStateInputEnvelope)
    createMany?: CityCreateManyStateInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
}
