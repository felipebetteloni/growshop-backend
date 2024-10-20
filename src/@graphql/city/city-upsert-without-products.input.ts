import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutProductsInput } from './city-update-without-products.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutProductsInput } from './city-create-without-products.input';
import { CityWhereInput } from './city-where.input';

@InputType()
export class CityUpsertWithoutProductsInput {

    @Field(() => CityUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CityUpdateWithoutProductsInput)
    update!: CityUpdateWithoutProductsInput;

    @Field(() => CityCreateWithoutProductsInput, {nullable:false})
    @Type(() => CityCreateWithoutProductsInput)
    create!: CityCreateWithoutProductsInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;
}
