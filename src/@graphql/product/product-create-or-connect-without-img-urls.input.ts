import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutImg_urlsInput } from './product-create-without-img-urls.input';

@InputType()
export class ProductCreateOrConnectWithoutImg_urlsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutImg_urlsInput, {nullable:false})
    @Type(() => ProductCreateWithoutImg_urlsInput)
    create!: ProductCreateWithoutImg_urlsInput;
}
