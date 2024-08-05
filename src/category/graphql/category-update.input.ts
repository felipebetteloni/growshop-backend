import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../@generated/prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../@generated/prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../@generated/prisma/nullable-date-time-field-update-operations.input';
import { ProductUpdateManyWithoutCategoryNestedInput } from '../../@generated/product/product-update-many-without-category-nested.input';
import { SubCategoryUpdateManyWithoutCategoryNestedInput } from '../../@generated/sub-category/sub-category-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    Product?: ProductUpdateManyWithoutCategoryNestedInput;

    @Field(() => SubCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    SubCategory?: SubCategoryUpdateManyWithoutCategoryNestedInput;
}
