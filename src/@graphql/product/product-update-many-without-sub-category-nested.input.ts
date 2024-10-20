import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSub_categoryInput } from './product-create-without-sub-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSub_categoryInput } from './product-create-or-connect-without-sub-category.input';
import { ProductUpsertWithWhereUniqueWithoutSub_categoryInput } from './product-upsert-with-where-unique-without-sub-category.input';
import { ProductCreateManySub_categoryInputEnvelope } from './product-create-many-sub-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutSub_categoryInput } from './product-update-with-where-unique-without-sub-category.input';
import { ProductUpdateManyWithWhereWithoutSub_categoryInput } from './product-update-many-with-where-without-sub-category.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutSub_categoryNestedInput {

    @Field(() => [ProductCreateWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutSub_categoryInput)
    create?: Array<ProductCreateWithoutSub_categoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSub_categoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSub_categoryInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutSub_categoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutSub_categoryInput>;

    @Field(() => ProductCreateManySub_categoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySub_categoryInputEnvelope)
    createMany?: ProductCreateManySub_categoryInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutSub_categoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutSub_categoryInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutSub_categoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutSub_categoryInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
