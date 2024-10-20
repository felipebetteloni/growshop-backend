import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodUpdateWithoutProductsInput } from './neighbourhood-update-without-products.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateWithoutProductsInput } from './neighbourhood-create-without-products.input';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';

@InputType()
export class NeighbourhoodUpsertWithoutProductsInput {

    @Field(() => NeighbourhoodUpdateWithoutProductsInput, {nullable:false})
    @Type(() => NeighbourhoodUpdateWithoutProductsInput)
    update!: NeighbourhoodUpdateWithoutProductsInput;

    @Field(() => NeighbourhoodCreateWithoutProductsInput, {nullable:false})
    @Type(() => NeighbourhoodCreateWithoutProductsInput)
    create!: NeighbourhoodCreateWithoutProductsInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    where?: NeighbourhoodWhereInput;
}
