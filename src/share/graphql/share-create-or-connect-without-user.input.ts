import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareCreateWithoutUserInput } from './share-create-without-user.input';

@InputType()
export class ShareCreateOrConnectWithoutUserInput {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareCreateWithoutUserInput, {nullable:false})
    @Type(() => ShareCreateWithoutUserInput)
    create!: ShareCreateWithoutUserInput;
}
