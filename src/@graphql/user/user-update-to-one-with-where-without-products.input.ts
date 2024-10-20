import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProductsInput } from './user-update-without-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductsInput)
    data!: UserUpdateWithoutProductsInput;
}
