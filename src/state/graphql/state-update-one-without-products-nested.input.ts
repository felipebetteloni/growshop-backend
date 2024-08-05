import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateWithoutProductsInput } from './state-create-without-products.input';
import { Type } from 'class-transformer';
import { StateCreateOrConnectWithoutProductsInput } from './state-create-or-connect-without-products.input';
import { StateUpsertWithoutProductsInput } from './state-upsert-without-products.input';
import { StateWhereInput } from './state-where.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { StateUpdateToOneWithWhereWithoutProductsInput } from './state-update-to-one-with-where-without-products.input';

@InputType()
export class StateUpdateOneWithoutProductsNestedInput {

    @Field(() => StateCreateWithoutProductsInput, {nullable:true})
    @Type(() => StateCreateWithoutProductsInput)
    create?: StateCreateWithoutProductsInput;

    @Field(() => StateCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => StateCreateOrConnectWithoutProductsInput)
    connectOrCreate?: StateCreateOrConnectWithoutProductsInput;

    @Field(() => StateUpsertWithoutProductsInput, {nullable:true})
    @Type(() => StateUpsertWithoutProductsInput)
    upsert?: StateUpsertWithoutProductsInput;

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    disconnect?: StateWhereInput;

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    delete?: StateWhereInput;

    @Field(() => StateWhereUniqueInput, {nullable:true})
    @Type(() => StateWhereUniqueInput)
    connect?: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => StateUpdateToOneWithWhereWithoutProductsInput)
    update?: StateUpdateToOneWithWhereWithoutProductsInput;
}
