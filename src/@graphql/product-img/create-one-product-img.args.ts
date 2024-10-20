import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgCreateInput } from './product-img-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductImgArgs {

    @Field(() => ProductImgCreateInput, {nullable:false})
    @Type(() => ProductImgCreateInput)
    data!: ProductImgCreateInput;
}
