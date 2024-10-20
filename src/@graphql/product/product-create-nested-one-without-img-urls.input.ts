import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutImg_urlsInput } from './product-create-without-img-urls.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutImg_urlsInput } from './product-create-or-connect-without-img-urls.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutImg_urlsInput {

    @Field(() => ProductCreateWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductCreateWithoutImg_urlsInput)
    create?: ProductCreateWithoutImg_urlsInput;

    @Field(() => ProductCreateOrConnectWithoutImg_urlsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImg_urlsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutImg_urlsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
