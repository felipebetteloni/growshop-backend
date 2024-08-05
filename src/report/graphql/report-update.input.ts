import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReportsNestedInput } from '../user/user-update-one-required-without-reports-nested.input';
import { ProductUpdateOneRequiredWithoutReportNestedInput } from '../product/product-update-one-required-without-report-nested.input';

@InputType()
export class ReportUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReportsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReportsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutReportNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutReportNestedInput;
}
