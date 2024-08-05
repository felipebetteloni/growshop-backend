import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Type } from 'class-transformer';
import { StateCreateWithoutProductsInput } from './state-create-without-products.input';

@InputType()
export class StateCreateOrConnectWithoutProductsInput {

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateCreateWithoutProductsInput, {nullable:false})
    @Type(() => StateCreateWithoutProductsInput)
    create!: StateCreateWithoutProductsInput;
}
