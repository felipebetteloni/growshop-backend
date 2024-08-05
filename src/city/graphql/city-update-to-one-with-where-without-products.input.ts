import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { CityUpdateWithoutProductsInput } from './city-update-without-products.input';

@InputType()
export class CityUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;

    @Field(() => CityUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CityUpdateWithoutProductsInput)
    data!: CityUpdateWithoutProductsInput;
}
