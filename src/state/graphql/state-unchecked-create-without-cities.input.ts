import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutStateInput } from '../product/product-unchecked-create-nested-many-without-state.input';

@InputType()
export class StateUncheckedCreateWithoutCitiesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutStateInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutStateInput;
}
