import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';
import { Type } from 'class-transformer';
import { ConditionUpdateWithoutProductsInput } from './condition-update-without-products.input';

@InputType()
export class ConditionUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;

    @Field(() => ConditionUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ConditionUpdateWithoutProductsInput)
    data!: ConditionUpdateWithoutProductsInput;
}
