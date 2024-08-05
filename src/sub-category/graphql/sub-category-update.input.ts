import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CategoryUpdateOneRequiredWithoutSubCategoryNestedInput } from '../category/category-update-one-required-without-sub-category-nested.input';
import { ProductUpdateManyWithoutSub_categoryNestedInput } from '../product/product-update-many-without-sub-category-nested.input';

@InputType()
export class SubCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneRequiredWithoutSubCategoryNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutSubCategoryNestedInput;

    @Field(() => ProductUpdateManyWithoutSub_categoryNestedInput, {nullable:true})
    Product?: ProductUpdateManyWithoutSub_categoryNestedInput;
}
