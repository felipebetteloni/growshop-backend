import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutImg_urlsInput } from './product-update-without-img-urls.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutImg_urlsInput } from './product-create-without-img-urls.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutImg_urlsInput {

    @Field(() => ProductUpdateWithoutImg_urlsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutImg_urlsInput)
    update!: ProductUpdateWithoutImg_urlsInput;

    @Field(() => ProductCreateWithoutImg_urlsInput, {nullable:false})
    @Type(() => ProductCreateWithoutImg_urlsInput)
    create!: ProductCreateWithoutImg_urlsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
