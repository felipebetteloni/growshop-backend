import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutImg_urlsInput } from './product-create-without-img-urls.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutImg_urlsInput } from './product-create-or-connect-without-img-urls.input';
import { ProductUpsertWithoutImg_urlsInput } from './product-upsert-without-img-urls.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutImg_urlsInput } from './product-update-to-one-with-where-without-img-urls.input';

@InputType()
export class ProductUpdateOneRequiredWithoutImg_urlsNestedInput {

    @Field(() => ProductCreateWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductCreateWithoutImg_urlsInput)
    create?: ProductCreateWithoutImg_urlsInput;

    @Field(() => ProductCreateOrConnectWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImg_urlsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutImg_urlsInput;

    @Field(() => ProductUpsertWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutImg_urlsInput)
    upsert?: ProductUpsertWithoutImg_urlsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutImg_urlsInput)
    update?: ProductUpdateToOneWithWhereWithoutImg_urlsInput;
}
