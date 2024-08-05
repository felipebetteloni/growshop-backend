import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgCreateManyInput } from './product-img-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductImgArgs {

    @Field(() => [ProductImgCreateManyInput], {nullable:false})
    @Type(() => ProductImgCreateManyInput)
    data!: Array<ProductImgCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
