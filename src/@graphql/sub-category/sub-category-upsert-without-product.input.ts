import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryUpdateWithoutProductInput } from './sub-category-update-without-product.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateWithoutProductInput } from './sub-category-create-without-product.input';
import { SubCategoryWhereInput } from './sub-category-where.input';

@InputType()
export class SubCategoryUpsertWithoutProductInput {

    @Field(() => SubCategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutProductInput)
    update!: SubCategoryUpdateWithoutProductInput;

    @Field(() => SubCategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutProductInput)
    create!: SubCategoryCreateWithoutProductInput;

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;
}
