import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { Type } from 'class-transformer';
import { BannerOrderByWithRelationInput } from './banner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannerScalarFieldEnum } from './banner-scalar-field.enum';

@ArgsType()
export class FindFirstBannerArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: BannerWhereInput;

    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;

    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BannerWhereUniqueInput, 'id' | 'activeSorting'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BannerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BannerScalarFieldEnum>;
}
