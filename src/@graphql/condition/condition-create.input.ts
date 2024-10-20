import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutConditionInput } from '../product/product-create-nested-many-without-condition.input';

@InputType()
export class ConditionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductCreateNestedManyWithoutConditionInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutConditionInput;
}
