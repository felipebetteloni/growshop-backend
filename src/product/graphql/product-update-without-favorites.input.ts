import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProductsNestedInput } from '../user/user-update-one-required-without-products-nested.input';
import { CategoryUpdateOneRequiredWithoutProductNestedInput } from '../category/category-update-one-required-without-product-nested.input';
import { SubCategoryUpdateOneRequiredWithoutProductNestedInput } from '../sub-category/sub-category-update-one-required-without-product-nested.input';
import { BrandUpdateOneRequiredWithoutProductsNestedInput } from '../brand/brand-update-one-required-without-products-nested.input';
import { ConditionUpdateOneRequiredWithoutProductsNestedInput } from '../condition/condition-update-one-required-without-products-nested.input';
import { CountryUpdateOneWithoutProductsNestedInput } from '../country/country-update-one-without-products-nested.input';
import { StateUpdateOneWithoutProductsNestedInput } from '../state/state-update-one-without-products-nested.input';
import { CityUpdateOneWithoutProductsNestedInput } from '../city/city-update-one-without-products-nested.input';
import { NeighbourhoodUpdateOneWithoutProductsNestedInput } from '../neighbourhood/neighbourhood-update-one-without-products-nested.input';
import { CommentUpdateManyWithoutProductNestedInput } from '../comment/comment-update-many-without-product-nested.input';
import { ProductImgUpdateManyWithoutProductNestedInput } from '../product-img/product-img-update-many-without-product-nested.input';
import { ReportUpdateOneWithoutProductNestedInput } from '../report/report-update-one-without-product-nested.input';
import { ShareUpdateManyWithoutProductNestedInput } from '../share/share-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateWithoutFavoritesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

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

    @Field(() => UserUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutProductNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput;

    @Field(() => SubCategoryUpdateOneRequiredWithoutProductNestedInput, {nullable:true})
    sub_category?: SubCategoryUpdateOneRequiredWithoutProductNestedInput;

    @Field(() => BrandUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => ConditionUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    condition?: ConditionUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => CountryUpdateOneWithoutProductsNestedInput, {nullable:true})
    country?: CountryUpdateOneWithoutProductsNestedInput;

    @Field(() => StateUpdateOneWithoutProductsNestedInput, {nullable:true})
    state?: StateUpdateOneWithoutProductsNestedInput;

    @Field(() => CityUpdateOneWithoutProductsNestedInput, {nullable:true})
    city?: CityUpdateOneWithoutProductsNestedInput;

    @Field(() => NeighbourhoodUpdateOneWithoutProductsNestedInput, {nullable:true})
    neighbourhood?: NeighbourhoodUpdateOneWithoutProductsNestedInput;

    @Field(() => CommentUpdateManyWithoutProductNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutProductNestedInput;

    @Field(() => ProductImgUpdateManyWithoutProductNestedInput, {nullable:true})
    img_urls?: ProductImgUpdateManyWithoutProductNestedInput;

    @Field(() => ReportUpdateOneWithoutProductNestedInput, {nullable:true})
    report?: ReportUpdateOneWithoutProductNestedInput;

    @Field(() => ShareUpdateManyWithoutProductNestedInput, {nullable:true})
    shares?: ShareUpdateManyWithoutProductNestedInput;
}
