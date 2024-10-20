import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutStateInput } from './product-create-without-state.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutStateInput } from './product-create-or-connect-without-state.input';
import { ProductCreateManyStateInputEnvelope } from './product-create-many-state-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutStateInput {

    @Field(() => [ProductCreateWithoutStateInput], {nullable:true})
    @Type(() => ProductCreateWithoutStateInput)
    create?: Array<ProductCreateWithoutStateInput>;

    @Field(() => [ProductCreateOrConnectWithoutStateInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStateInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStateInput>;

    @Field(() => ProductCreateManyStateInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStateInputEnvelope)
    createMany?: ProductCreateManyStateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
