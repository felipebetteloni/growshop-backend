import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareUpdateWithoutUserInput } from './share-update-without-user.input';

@InputType()
export class ShareUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => ShareUpdateWithoutUserInput)
    data!: ShareUpdateWithoutUserInput;
}
