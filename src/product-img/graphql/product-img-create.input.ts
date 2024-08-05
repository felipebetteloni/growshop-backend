import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutImg_urlsInput } from '../product/product-create-nested-one-without-img-urls.input';

@InputType()
export class ProductImgCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    imgUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutImg_urlsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutImg_urlsInput;
}
