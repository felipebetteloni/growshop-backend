import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ProductUpdateManyWithoutUserNestedInput } from '../product/product-update-many-without-user-nested.input';
import { FavoriteUpdateManyWithoutUserNestedInput } from '../favorite/favorite-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { ReplyUpdateManyWithoutUserNestedInput } from '../reply/reply-update-many-without-user-nested.input';
import { MessageUpdateManyWithoutUserNestedInput } from '../message/message-update-many-without-user-nested.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { ReportUpdateManyWithoutUserNestedInput } from '../report/report-update-many-without-user-nested.input';
import { ChatUpdateManyWithoutUserToNestedInput } from '../chat/chat-update-many-without-user-to-nested.input';
import { NotificationUpdateManyWithoutUserNestedInput } from '../notification/notification-update-many-without-user-nested.input';
import { ShareUpdateManyWithoutUserNestedInput } from '../share/share-update-many-without-user-nested.input';
import { SubscriptionUpdateManyWithoutUserNestedInput } from '../subscription/subscription-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutChatsFromInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPremium?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStore?: BoolFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutUserNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutUserNestedInput;

    @Field(() => FavoriteUpdateManyWithoutUserNestedInput, {nullable:true})
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => ReplyUpdateManyWithoutUserNestedInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutUserNestedInput;

    @Field(() => MessageUpdateManyWithoutUserNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => ReportUpdateManyWithoutUserNestedInput, {nullable:true})
    reports?: ReportUpdateManyWithoutUserNestedInput;

    @Field(() => ChatUpdateManyWithoutUserToNestedInput, {nullable:true})
    chatsTo?: ChatUpdateManyWithoutUserToNestedInput;

    @Field(() => NotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutUserNestedInput;

    @Field(() => ShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: ShareUpdateManyWithoutUserNestedInput;

    @Field(() => SubscriptionUpdateManyWithoutUserNestedInput, {nullable:true})
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput;
}
