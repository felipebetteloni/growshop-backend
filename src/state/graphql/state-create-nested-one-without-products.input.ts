import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutProductsInput } from './state-create-without-products.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutProductsInput } from './state-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';

@InputType()
export class StateCreateNestedOneWithoutProductsInput {

    @Field(() => StateCreateWithoutProductsInput, {nullable:true})
    @Type(() => StateCreateWithoutProductsInput)
    create?: StateCreateWithoutProductsInput;

    @Field(() => StateCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => StateCreateOrConnectWithoutProductsInput)
    connectOrCreate?: StateCreateOrConnectWithoutProductsInput;

    @Field(() => StateWhereUniqueInput, {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;
}
