import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutUserInput } from '../product/product-unchecked-create-nested-many-without-user.input';
import { FavoriteUncheckedCreateNestedManyWithoutUserInput } from '../favorite/favorite-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutUserInput } from '../message/message-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { ReportUncheckedCreateNestedManyWithoutUserInput } from '../report/report-unchecked-create-nested-many-without-user.input';
import { ChatUncheckedCreateNestedManyWithoutUserFromInput } from '../chat/chat-unchecked-create-nested-many-without-user-from.input';
import { ChatUncheckedCreateNestedManyWithoutUserToInput } from '../chat/chat-unchecked-create-nested-many-without-user-to.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';
import { ShareUncheckedCreateNestedManyWithoutUserInput } from '../share/share-unchecked-create-nested-many-without-user.input';
import { SubscriptionUncheckedCreateNestedManyWithoutUserInput } from '../subscription/subscription-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRepliesInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ChatUncheckedCreateNestedManyWithoutUserFromInput, {nullable:true})
    chatsFrom?: ChatUncheckedCreateNestedManyWithoutUserFromInput;

    @Field(() => ChatUncheckedCreateNestedManyWithoutUserToInput, {nullable:true})
    chatsTo?: ChatUncheckedCreateNestedManyWithoutUserToInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SubscriptionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput;
}
