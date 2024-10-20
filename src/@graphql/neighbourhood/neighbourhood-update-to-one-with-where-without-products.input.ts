import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';
import { Type } from 'class-transformer';
import { NeighbourhoodUpdateWithoutProductsInput } from './neighbourhood-update-without-products.input';

@InputType()
export class NeighbourhoodUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    where?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodUpdateWithoutProductsInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateWithoutProductsInput)
    data!: NeighbourhoodUpdateWithoutProductsInput;
}
