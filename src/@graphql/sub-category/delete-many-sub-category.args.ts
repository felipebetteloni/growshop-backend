import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubCategoryArgs {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;
}
