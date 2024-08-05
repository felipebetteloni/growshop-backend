import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSharesInput } from '../user/user-create-nested-one-without-shares.input';
import { ProductCreateNestedOneWithoutSharesInput } from '../product/product-create-nested-one-without-shares.input';

@InputType()
export class ShareCreateInput {

    @Field(() => UserCreateNestedOneWithoutSharesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSharesInput;

    @Field(() => ProductCreateNestedOneWithoutSharesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutSharesInput;
}
