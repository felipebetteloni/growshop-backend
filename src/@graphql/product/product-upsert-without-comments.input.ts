import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutCommentsInput } from './product-update-without-comments.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCommentsInput } from './product-create-without-comments.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutCommentsInput {

    @Field(() => ProductUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCommentsInput)
    update!: ProductUpdateWithoutCommentsInput;

    @Field(() => ProductCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCommentsInput)
    create!: ProductCreateWithoutCommentsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
