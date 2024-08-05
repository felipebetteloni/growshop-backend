import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCommentsInput } from './product-create-without-comments.input';

@InputType()
export class ProductCreateOrConnectWithoutCommentsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCommentsInput)
    create!: ProductCreateWithoutCommentsInput;
}
