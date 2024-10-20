import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';

@InputType()
export class SubCategoryListRelationFilter {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    every?: SubCategoryWhereInput;

    @Field(() => SubCategoryWhereInput, {nullable:true})
    some?: SubCategoryWhereInput;

    @Field(() => SubCategoryWhereInput, {nullable:true})
    none?: SubCategoryWhereInput;
}
