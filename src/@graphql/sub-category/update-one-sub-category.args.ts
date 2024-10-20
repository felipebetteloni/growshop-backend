import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryUpdateInput } from './sub-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';

@ArgsType()
export class UpdateOneSubCategoryArgs {

    @Field(() => SubCategoryUpdateInput, {nullable:false})
    @Type(() => SubCategoryUpdateInput)
    data!: SubCategoryUpdateInput;

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;
}
