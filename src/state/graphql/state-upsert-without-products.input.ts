import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateUpdateWithoutProductsInput } from './state-update-without-products.input';
import { Type } from 'class-transformer';
import { StateCreateWithoutProductsInput } from './state-create-without-products.input';
import { StateWhereInput } from './state-where.input';

@InputType()
export class StateUpsertWithoutProductsInput {

    @Field(() => StateUpdateWithoutProductsInput, {nullable:false})
    @Type(() => StateUpdateWithoutProductsInput)
    update!: StateUpdateWithoutProductsInput;

    @Field(() => StateCreateWithoutProductsInput, {nullable:false})
    @Type(() => StateCreateWithoutProductsInput)
    create!: StateCreateWithoutProductsInput;

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;
}
