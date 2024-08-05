import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReportsNestedInput } from '../user/user-update-one-required-without-reports-nested.input';

@InputType()
export class ReportUpdateWithoutProductInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReportsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReportsNestedInput;
}
