import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionType {
    NORMAL = "NORMAL",
    BRONZE = "BRONZE",
    SILVER = "SILVER",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}


registerEnumType(SubscriptionType, { name: 'SubscriptionType', description: undefined })
