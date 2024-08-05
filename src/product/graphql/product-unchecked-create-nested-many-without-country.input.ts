import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCountryInput } from './product-create-without-country.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCountryInput } from './product-create-or-connect-without-country.input';
import { ProductCreateManyCountryInputEnvelope } from './product-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [ProductCreateWithoutCountryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCountryInput)
    create?: Array<ProductCreateWithoutCountryInput>;

    @Field(() => [ProductCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCountryInput>;

    @Field(() => ProductCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCountryInputEnvelope)
    createMany?: ProductCreateManyCountryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
