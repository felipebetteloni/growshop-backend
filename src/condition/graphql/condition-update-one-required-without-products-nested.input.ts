import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConditionCreateWithoutProductsInput } from './condition-create-without-products.input';
import { Type } from 'class-transformer';
import { ConditionCreateOrConnectWithoutProductsInput } from './condition-create-or-connect-without-products.input';
import { ConditionUpsertWithoutProductsInput } from './condition-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { ConditionUpdateToOneWithWhereWithoutProductsInput } from './condition-update-to-one-with-where-without-products.input';

@InputType()
export class ConditionUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => ConditionCreateWithoutProductsInput, {nullable:true})
    @Type(() => ConditionCreateWithoutProductsInput)
    create?: ConditionCreateWithoutProductsInput;

    @Field(() => ConditionCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ConditionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: ConditionCreateOrConnectWithoutProductsInput;

    @Field(() => ConditionUpsertWithoutProductsInput, {nullable:true})
    @Type(() => ConditionUpsertWithoutProductsInput)
    upsert?: ConditionUpsertWithoutProductsInput;

    @Field(() => ConditionWhereUniqueInput, {nullable:true})
    @Type(() => ConditionWhereUniqueInput)
    connect?: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;

    @Field(() => ConditionUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => ConditionUpdateToOneWithWhereWithoutProductsInput)
    update?: ConditionUpdateToOneWithWhereWithoutProductsInput;
}
