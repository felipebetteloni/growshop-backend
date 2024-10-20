import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateManyCategoryInput } from './sub-category-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class SubCategoryCreateManyCategoryInputEnvelope {

    @Field(() => [SubCategoryCreateManyCategoryInput], {nullable:false})
    @Type(() => SubCategoryCreateManyCategoryInput)
    data!: Array<SubCategoryCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
