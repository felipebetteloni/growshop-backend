import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { User } from '../user/user.model';
import { ReplyCount } from './reply-count.output';

@ObjectType()
export class Reply {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:true})
    replyId!: string | null;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Comment, {nullable:false})
    comment?: Comment;

    @Field(() => Reply, {nullable:true})
    reply?: Reply | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => ReplyCount, {nullable:false})
    _count?: ReplyCount;
}
