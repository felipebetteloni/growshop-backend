import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryScalarWhereInput } from './sub-category-scalar-where.input';
import { Type } from 'class-transformer';
import { SubCategoryUpdateManyMutationInput } from './sub-category-update-many-mutation.input';

@InputType()
export class SubCategoryUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => SubCategoryScalarWhereInput, {nullable:false})
    @Type(() => SubCategoryScalarWhereInput)
    where!: SubCategoryScalarWhereInput;

    @Field(() => SubCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubCategoryUpdateManyMutationInput)
    data!: SubCategoryUpdateManyMutationInput;
}
