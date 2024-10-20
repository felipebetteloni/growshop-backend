import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryUpdateWithoutCategoryInput } from './sub-category-update-without-category.input';
import { SubCategoryCreateWithoutCategoryInput } from './sub-category-create-without-category.input';

@InputType()
export class SubCategoryUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutCategoryInput)
    update!: SubCategoryUpdateWithoutCategoryInput;

    @Field(() => SubCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create!: SubCategoryCreateWithoutCategoryInput;
}
