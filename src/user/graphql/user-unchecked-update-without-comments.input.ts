import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutUserNestedInput } from '../product/product-unchecked-update-many-without-user-nested.input';
import { FavoriteUncheckedUpdateManyWithoutUserNestedInput } from '../favorite/favorite-unchecked-update-many-without-user-nested.input';
import { ReplyUncheckedUpdateManyWithoutUserNestedInput } from '../reply/reply-unchecked-update-many-without-user-nested.input';
import { MessageUncheckedUpdateManyWithoutUserNestedInput } from '../message/message-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { ReportUncheckedUpdateManyWithoutUserNestedInput } from '../report/report-unchecked-update-many-without-user-nested.input';
import { ChatUncheckedUpdateManyWithoutUserFromNestedInput } from '../chat/chat-unchecked-update-many-without-user-from-nested.input';
import { ChatUncheckedUpdateManyWithoutUserToNestedInput } from '../chat/chat-unchecked-update-many-without-user-to-nested.input';
import { NotificationUncheckedUpdateManyWithoutUserNestedInput } from '../notification/notification-unchecked-update-many-without-user-nested.input';
import { ShareUncheckedUpdateManyWithoutUserNestedInput } from '../share/share-unchecked-update-many-without-user-nested.input';
import { SubscriptionUncheckedUpdateManyWithoutUserNestedInput } from '../subscription/subscription-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {

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

    @Field(() => ProductUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FavoriteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReplyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MessageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReportUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ChatUncheckedUpdateManyWithoutUserFromNestedInput, {nullable:true})
    chatsFrom?: ChatUncheckedUpdateManyWithoutUserFromNestedInput;

    @Field(() => ChatUncheckedUpdateManyWithoutUserToNestedInput, {nullable:true})
    chatsTo?: ChatUncheckedUpdateManyWithoutUserToNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SubscriptionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
}
