import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUpdateManyWithoutConditionNestedInput } from '../product/product-update-many-without-condition-nested.input';

@InputType()
export class ConditionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutConditionNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutConditionNestedInput;
}
