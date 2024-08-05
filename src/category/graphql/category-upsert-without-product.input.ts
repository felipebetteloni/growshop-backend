import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutProductInput } from './category-update-without-product.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutProductInput } from './category-create-without-product.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutProductInput {

    @Field(() => CategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductInput)
    update!: CategoryUpdateWithoutProductInput;

    @Field(() => CategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductInput)
    create!: CategoryCreateWithoutProductInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
