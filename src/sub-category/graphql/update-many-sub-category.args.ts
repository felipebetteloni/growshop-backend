import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryUpdateManyMutationInput } from './sub-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubCategoryWhereInput } from './sub-category-where.input';

@ArgsType()
export class UpdateManySubCategoryArgs {

    @Field(() => SubCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubCategoryUpdateManyMutationInput)
    data!: SubCategoryUpdateManyMutationInput;

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;
}
