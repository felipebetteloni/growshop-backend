import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';
import { Type } from 'class-transformer';
import { SubCategoryUpdateWithoutProductInput } from './sub-category-update-without-product.input';

@InputType()
export class SubCategoryUpdateToOneWithWhereWithoutProductInput {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;

    @Field(() => SubCategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutProductInput)
    data!: SubCategoryUpdateWithoutProductInput;
}
