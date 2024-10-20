import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutProductInput } from './category-update-without-product.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutProductInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductInput)
    data!: CategoryUpdateWithoutProductInput;
}
