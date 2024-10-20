import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgCreateManyProductInput } from './product-img-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductImgCreateManyProductInputEnvelope {

    @Field(() => [ProductImgCreateManyProductInput], {nullable:false})
    @Type(() => ProductImgCreateManyProductInput)
    data!: Array<ProductImgCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
