import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutProductInput } from './category-create-without-product.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutProductInput } from './category-create-or-connect-without-product.input';
import { CategoryUpsertWithoutProductInput } from './category-upsert-without-product.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutProductInput } from './category-update-to-one-with-where-without-product.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutProductNestedInput {

    @Field(() => CategoryCreateWithoutProductInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductInput)
    create?: CategoryCreateWithoutProductInput;

    @Field(() => CategoryCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput;

    @Field(() => CategoryUpsertWithoutProductInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutProductInput)
    upsert?: CategoryUpsertWithoutProductInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutProductInput)
    update?: CategoryUpdateToOneWithWhereWithoutProductInput;
}
