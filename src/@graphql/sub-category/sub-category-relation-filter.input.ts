import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';

@InputType()
export class SubCategoryRelationFilter {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    is?: SubCategoryWhereInput;

    @Field(() => SubCategoryWhereInput, {nullable:true})
    isNot?: SubCategoryWhereInput;
}
