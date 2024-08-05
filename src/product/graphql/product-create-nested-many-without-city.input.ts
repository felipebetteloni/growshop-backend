import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCityInput } from './product-create-without-city.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCityInput } from './product-create-or-connect-without-city.input';
import { ProductCreateManyCityInputEnvelope } from './product-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutCityInput {

    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    @Type(() => ProductCreateWithoutCityInput)
    create?: Array<ProductCreateWithoutCityInput>;

    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;

    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCityInputEnvelope)
    createMany?: ProductCreateManyCityInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
