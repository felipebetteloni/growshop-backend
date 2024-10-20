import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateWithoutProductInput } from './sub-category-create-without-product.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateOrConnectWithoutProductInput } from './sub-category-create-or-connect-without-product.input';
import { SubCategoryUpsertWithoutProductInput } from './sub-category-upsert-without-product.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { SubCategoryUpdateToOneWithWhereWithoutProductInput } from './sub-category-update-to-one-with-where-without-product.input';

@InputType()
export class SubCategoryUpdateOneRequiredWithoutProductNestedInput {

    @Field(() => SubCategoryCreateWithoutProductInput, {nullable:true})
    @Type(() => SubCategoryCreateWithoutProductInput)
    create?: SubCategoryCreateWithoutProductInput;

    @Field(() => SubCategoryCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductInput;

    @Field(() => SubCategoryUpsertWithoutProductInput, {nullable:true})
    @Type(() => SubCategoryUpsertWithoutProductInput)
    upsert?: SubCategoryUpsertWithoutProductInput;

    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => SubCategoryUpdateToOneWithWhereWithoutProductInput)
    update?: SubCategoryUpdateToOneWithWhereWithoutProductInput;
}
