import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutProductsInput } from './city-create-without-products.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutProductsInput } from './city-create-or-connect-without-products.input';
import { CityUpsertWithoutProductsInput } from './city-upsert-without-products.input';
import { CityWhereInput } from './city-where.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateToOneWithWhereWithoutProductsInput } from './city-update-to-one-with-where-without-products.input';

@InputType()
export class CityUpdateOneWithoutProductsNestedInput {

    @Field(() => CityCreateWithoutProductsInput, {nullable:true})
    @Type(() => CityCreateWithoutProductsInput)
    create?: CityCreateWithoutProductsInput;

    @Field(() => CityCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CityCreateOrConnectWithoutProductsInput;

    @Field(() => CityUpsertWithoutProductsInput, {nullable:true})
    @Type(() => CityUpsertWithoutProductsInput)
    upsert?: CityUpsertWithoutProductsInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    disconnect?: CityWhereInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    delete?: CityWhereInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => CityUpdateToOneWithWhereWithoutProductsInput)
    update?: CityUpdateToOneWithWhereWithoutProductsInput;
}
