import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { FavoriteUncheckedUpdateManyWithoutProductNestedInput } from '../favorite/favorite-unchecked-update-many-without-product-nested.input';
import { CommentUncheckedUpdateManyWithoutProductNestedInput } from '../comment/comment-unchecked-update-many-without-product-nested.input';
import { ProductImgUncheckedUpdateManyWithoutProductNestedInput } from '../product-img/product-img-unchecked-update-many-without-product-nested.input';
import { ReportUncheckedUpdateOneWithoutProductNestedInput } from '../report/report-unchecked-update-one-without-product-nested.input';
import { ShareUncheckedUpdateManyWithoutProductNestedInput } from '../share/share-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutStateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sub_categoryId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conditionId?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    countryId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    neighbourhoodId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zip_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPromoted?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    viewCount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => FavoriteUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    favorites?: FavoriteUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductImgUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    img_urls?: ProductImgUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ReportUncheckedUpdateOneWithoutProductNestedInput, {nullable:true})
    report?: ReportUncheckedUpdateOneWithoutProductNestedInput;

    @Field(() => ShareUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    shares?: ShareUncheckedUpdateManyWithoutProductNestedInput;
}
