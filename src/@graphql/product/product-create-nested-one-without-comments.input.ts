import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCommentsInput } from './product-create-without-comments.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCommentsInput } from './product-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutCommentsInput {

    @Field(() => ProductCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ProductCreateWithoutCommentsInput)
    create?: ProductCreateWithoutCommentsInput;

    @Field(() => ProductCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutCommentsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
