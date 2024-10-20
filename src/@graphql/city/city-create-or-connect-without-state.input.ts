import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutStateInput } from './city-create-without-state.input';

@InputType()
export class CityCreateOrConnectWithoutStateInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityCreateWithoutStateInput, {nullable:false})
    @Type(() => CityCreateWithoutStateInput)
    create!: CityCreateWithoutStateInput;
}
