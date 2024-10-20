import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCommentsInput } from './product-update-without-comments.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCommentsInput)
    data!: ProductUpdateWithoutCommentsInput;
}
