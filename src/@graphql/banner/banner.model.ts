import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Banner {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl!: string | null;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sorting!: number;

    @Field(() => Int, {nullable:true,defaultValue:0})
    viewCount!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    clickCount!: number | null;
}
