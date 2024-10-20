import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryCreateManyInput } from './sub-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubCategoryArgs {

    @Field(() => [SubCategoryCreateManyInput], {nullable:false})
    @Type(() => SubCategoryCreateManyInput)
    data!: Array<SubCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
