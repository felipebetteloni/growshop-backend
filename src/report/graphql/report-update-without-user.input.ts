import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutReportNestedInput } from '../product/product-update-one-required-without-report-nested.input';

@InputType()
export class ReportUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutReportNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutReportNestedInput;
}
