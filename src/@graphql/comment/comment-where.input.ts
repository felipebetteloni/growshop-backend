import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';

@InputType()
export class CommentWhereInput {

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;
}
