import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutImg_urlsInput } from './product-update-without-img-urls.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutImg_urlsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutImg_urlsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutImg_urlsInput)
    data!: ProductUpdateWithoutImg_urlsInput;
}
