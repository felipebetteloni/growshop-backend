import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';
import { Type } from 'class-transformer';
import { StateUpdateWithoutProductsInput } from './state-update-without-products.input';

@InputType()
export class StateUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;

    @Field(() => StateUpdateWithoutProductsInput, {nullable:false})
    @Type(() => StateUpdateWithoutProductsInput)
    data!: StateUpdateWithoutProductsInput;
}
