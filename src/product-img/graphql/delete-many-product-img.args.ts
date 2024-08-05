import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgWhereInput } from './product-img-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductImgArgs {

    @Field(() => ProductImgWhereInput, {nullable:true})
    @Type(() => ProductImgWhereInput)
    where?: ProductImgWhereInput;
}
