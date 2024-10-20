import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateWithoutCategoryInput } from './sub-category-create-without-category.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateOrConnectWithoutCategoryInput } from './sub-category-create-or-connect-without-category.input';
import { SubCategoryCreateManyCategoryInputEnvelope } from './sub-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';

@InputType()
export class SubCategoryUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;

    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: SubCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;
}
