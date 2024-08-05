import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutStateInput } from './product-create-without-state.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutStateInput } from './product-create-or-connect-without-state.input';
import { ProductUpsertWithWhereUniqueWithoutStateInput } from './product-upsert-with-where-unique-without-state.input';
import { ProductCreateManyStateInputEnvelope } from './product-create-many-state-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutStateInput } from './product-update-with-where-unique-without-state.input';
import { ProductUpdateManyWithWhereWithoutStateInput } from './product-update-many-with-where-without-state.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutStateNestedInput {

    @Field(() => [ProductCreateWithoutStateInput], {nullable:true})
    @Type(() => ProductCreateWithoutStateInput)
    create?: Array<ProductCreateWithoutStateInput>;

    @Field(() => [ProductCreateOrConnectWithoutStateInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStateInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStateInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutStateInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutStateInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutStateInput>;

    @Field(() => ProductCreateManyStateInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStateInputEnvelope)
    createMany?: ProductCreateManyStateInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutStateInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutStateInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutStateInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutStateInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutStateInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutStateInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
