import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSharesInput } from './product-create-without-shares.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSharesInput } from './product-create-or-connect-without-shares.input';
import { ProductUpsertWithoutSharesInput } from './product-upsert-without-shares.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutSharesInput } from './product-update-to-one-with-where-without-shares.input';

@InputType()
export class ProductUpdateOneRequiredWithoutSharesNestedInput {

    @Field(() => ProductCreateWithoutSharesInput, {nullable:true})
    @Type(() => ProductCreateWithoutSharesInput)
    create?: ProductCreateWithoutSharesInput;

    @Field(() => ProductCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSharesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutSharesInput;

    @Field(() => ProductUpsertWithoutSharesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutSharesInput)
    upsert?: ProductUpsertWithoutSharesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutSharesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutSharesInput)
    update?: ProductUpdateToOneWithWhereWithoutSharesInput;
}
