import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutConditionInput } from '../product/product-unchecked-create-nested-many-without-condition.input';

@InputType()
export class ConditionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutConditionInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutConditionInput;
}
