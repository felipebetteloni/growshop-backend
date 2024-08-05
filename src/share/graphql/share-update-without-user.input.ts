import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutSharesNestedInput } from '../product/product-update-one-required-without-shares-nested.input';

@InputType()
export class ShareUpdateWithoutUserInput {

    @Field(() => ProductUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutSharesNestedInput;
}
