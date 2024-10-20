import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateInput } from './sub-category-create.input';
import { SubCategoryUpdateInput } from './sub-category-update.input';

@ArgsType()
export class UpsertOneSubCategoryArgs {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryCreateInput, {nullable:false})
    @Type(() => SubCategoryCreateInput)
    create!: SubCategoryCreateInput;

    @Field(() => SubCategoryUpdateInput, {nullable:false})
    @Type(() => SubCategoryUpdateInput)
    update!: SubCategoryUpdateInput;
}
