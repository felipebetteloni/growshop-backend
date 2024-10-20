import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConditionUpdateWithoutProductsInput } from './condition-update-without-products.input';
import { Type } from 'class-transformer';
import { ConditionCreateWithoutProductsInput } from './condition-create-without-products.input';
import { ConditionWhereInput } from './condition-where.input';

@InputType()
export class ConditionUpsertWithoutProductsInput {

    @Field(() => ConditionUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ConditionUpdateWithoutProductsInput)
    update!: ConditionUpdateWithoutProductsInput;

    @Field(() => ConditionCreateWithoutProductsInput, {nullable:false})
    @Type(() => ConditionCreateWithoutProductsInput)
    create!: ConditionCreateWithoutProductsInput;

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;
}
