import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';
import { Type } from 'class-transformer';
import { SubCategoryOrderByWithRelationInput } from './sub-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubCategoryScalarFieldEnum } from './sub-category-scalar-field.enum';

@ArgsType()
export class FindFirstSubCategoryArgs {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;

    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;

    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubCategoryScalarFieldEnum>;
}
