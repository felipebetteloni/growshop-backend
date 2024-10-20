import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutImg_urlsNestedInput } from '../product/product-update-one-required-without-img-urls-nested.input';

@InputType()
export class ProductImgUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imgUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutImg_urlsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutImg_urlsNestedInput;
}
