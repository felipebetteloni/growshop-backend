import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutSharesInput } from '../product/product-create-nested-one-without-shares.input';

@InputType()
export class ShareCreateWithoutUserInput {

    @Field(() => ProductCreateNestedOneWithoutSharesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutSharesInput;
}
