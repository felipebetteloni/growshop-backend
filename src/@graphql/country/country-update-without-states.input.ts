import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUpdateManyWithoutCountryNestedInput } from '../product/product-update-many-without-country-nested.input';

@InputType()
export class CountryUpdateWithoutStatesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutCountryNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCountryNestedInput;
}
