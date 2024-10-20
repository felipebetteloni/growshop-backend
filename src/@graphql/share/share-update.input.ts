import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSharesNestedInput } from '../user/user-update-one-required-without-shares-nested.input';
import { ProductUpdateOneRequiredWithoutSharesNestedInput } from '../product/product-update-one-required-without-shares-nested.input';

@InputType()
export class ShareUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSharesNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutSharesNestedInput;
}
