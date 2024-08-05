import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateWithoutCategoryInput } from './sub-category-create-without-category.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateOrConnectWithoutCategoryInput } from './sub-category-create-or-connect-without-category.input';
import { SubCategoryUpsertWithWhereUniqueWithoutCategoryInput } from './sub-category-upsert-with-where-unique-without-category.input';
import { SubCategoryCreateManyCategoryInputEnvelope } from './sub-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { SubCategoryUpdateWithWhereUniqueWithoutCategoryInput } from './sub-category-update-with-where-unique-without-category.input';
import { SubCategoryUpdateManyWithWhereWithoutCategoryInput } from './sub-category-update-many-with-where-without-category.input';
import { SubCategoryScalarWhereInput } from './sub-category-scalar-where.input';

@InputType()
export class SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;

    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => [SubCategoryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<SubCategoryUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: SubCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<SubCategoryUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [SubCategoryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<SubCategoryUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    @Type(() => SubCategoryScalarWhereInput)
    deleteMany?: Array<SubCategoryScalarWhereInput>;
}
