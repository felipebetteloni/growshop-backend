import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConditionCreateWithoutProductsInput } from './condition-create-without-products.input';
import { Type } from 'class-transformer';
import { ConditionCreateOrConnectWithoutProductsInput } from './condition-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';

@InputType()
export class ConditionCreateNestedOneWithoutProductsInput {

    @Field(() => ConditionCreateWithoutProductsInput, {nullable:true})
    @Type(() => ConditionCreateWithoutProductsInput)
    create?: ConditionCreateWithoutProductsInput;

    @Field(() => ConditionCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ConditionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: ConditionCreateOrConnectWithoutProductsInput;

    @Field(() => ConditionWhereUniqueInput, {nullable:true})
    @Type(() => ConditionWhereUniqueInput)
    connect?: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;
}
