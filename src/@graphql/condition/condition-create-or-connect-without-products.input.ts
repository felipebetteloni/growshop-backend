import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { Type } from 'class-transformer';
import { ConditionCreateWithoutProductsInput } from './condition-create-without-products.input';

@InputType()
export class ConditionCreateOrConnectWithoutProductsInput {

    @Field(() => ConditionWhereUniqueInput, {nullable:false})
    @Type(() => ConditionWhereUniqueInput)
    where!: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;

    @Field(() => ConditionCreateWithoutProductsInput, {nullable:false})
    @Type(() => ConditionCreateWithoutProductsInput)
    create!: ConditionCreateWithoutProductsInput;
}
