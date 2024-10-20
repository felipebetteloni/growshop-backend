import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BannerActiveSortingCompoundUniqueInput {

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    sorting!: number;
}
