import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryUpdateWithoutCategoryInput } from './sub-category-update-without-category.input';

@InputType()
export class SubCategoryUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutCategoryInput)
    data!: SubCategoryUpdateWithoutCategoryInput;
}
