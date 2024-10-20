import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSub_categoryInput } from './product-create-without-sub-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSub_categoryInput } from './product-create-or-connect-without-sub-category.input';
import { ProductCreateManySub_categoryInputEnvelope } from './product-create-many-sub-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutSub_categoryInput {

    @Field(() => [ProductCreateWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutSub_categoryInput)
    create?: Array<ProductCreateWithoutSub_categoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutSub_categoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSub_categoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSub_categoryInput>;

    @Field(() => ProductCreateManySub_categoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySub_categoryInputEnvelope)
    createMany?: ProductCreateManySub_categoryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
