import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutProductsInput } from './city-create-without-products.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutProductsInput } from './city-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutProductsInput {

    @Field(() => CityCreateWithoutProductsInput, {nullable:true})
    @Type(() => CityCreateWithoutProductsInput)
    create?: CityCreateWithoutProductsInput;

    @Field(() => CityCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CityCreateOrConnectWithoutProductsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
