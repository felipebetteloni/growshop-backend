import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBannerOrThrowArgs {

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: Prisma.AtLeast<BannerWhereUniqueInput, 'id' | 'activeSorting'>;
}
