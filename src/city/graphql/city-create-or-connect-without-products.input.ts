import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutProductsInput } from './city-create-without-products.input';

@InputType()
export class CityCreateOrConnectWithoutProductsInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityCreateWithoutProductsInput, {nullable:false})
    @Type(() => CityCreateWithoutProductsInput)
    create!: CityCreateWithoutProductsInput;
}
