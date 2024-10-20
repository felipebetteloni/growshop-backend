import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutUserInput } from '../product/product-create-nested-many-without-user.input';
import { FavoriteCreateNestedManyWithoutUserInput } from '../favorite/favorite-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { ReplyCreateNestedManyWithoutUserInput } from '../reply/reply-create-nested-many-without-user.input';
import { MessageCreateNestedManyWithoutUserInput } from '../message/message-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { ReportCreateNestedManyWithoutUserInput } from '../report/report-create-nested-many-without-user.input';
import { ChatCreateNestedManyWithoutUserFromInput } from '../chat/chat-create-nested-many-without-user-from.input';
import { ChatCreateNestedManyWithoutUserToInput } from '../chat/chat-create-nested-many-without-user-to.input';
import { ShareCreateNestedManyWithoutUserInput } from '../share/share-create-nested-many-without-user.input';
import { SubscriptionCreateNestedManyWithoutUserInput } from '../subscription/subscription-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutNotificationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isPremium?: boolean;

    @Field(() => Boolean, {nullable:true})
    isStore?: boolean;

    @Field(() => ProductCreateNestedManyWithoutUserInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutUserInput;

    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: FavoriteCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => ReplyCreateNestedManyWithoutUserInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutUserInput;

    @Field(() => MessageCreateNestedManyWithoutUserInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => ReportCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutUserInput;

    @Field(() => ChatCreateNestedManyWithoutUserFromInput, {nullable:true})
    chatsFrom?: ChatCreateNestedManyWithoutUserFromInput;

    @Field(() => ChatCreateNestedManyWithoutUserToInput, {nullable:true})
    chatsTo?: ChatCreateNestedManyWithoutUserToInput;

    @Field(() => ShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: ShareCreateNestedManyWithoutUserInput;

    @Field(() => SubscriptionCreateNestedManyWithoutUserInput, {nullable:true})
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput;
}
