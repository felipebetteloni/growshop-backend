import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryCreateInput } from './sub-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubCategoryArgs {

    @Field(() => SubCategoryCreateInput, {nullable:false})
    @Type(() => SubCategoryCreateInput)
    data!: SubCategoryCreateInput;
}
