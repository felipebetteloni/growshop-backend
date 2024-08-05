import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutNeighbourhoodInput } from '../product/product-unchecked-create-nested-many-without-neighbourhood.input';

@InputType()
export class NeighbourhoodUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    cityId!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutNeighbourhoodInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutNeighbourhoodInput;
}
