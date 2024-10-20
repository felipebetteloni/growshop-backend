import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgWhereInput } from './product-img-where.input';

@InputType()
export class ProductImgListRelationFilter {

    @Field(() => ProductImgWhereInput, {nullable:true})
    every?: ProductImgWhereInput;

    @Field(() => ProductImgWhereInput, {nullable:true})
    some?: ProductImgWhereInput;

    @Field(() => ProductImgWhereInput, {nullable:true})
    none?: ProductImgWhereInput;
}
