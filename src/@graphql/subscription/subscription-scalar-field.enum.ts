import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionScalarFieldEnum {
    id = "id",
    userId = "userId",
    createdAt = "createdAt",
    endAt = "endAt",
    isActive = "isActive",
    type = "type"
}


registerEnumType(SubscriptionScalarFieldEnum, { name: 'SubscriptionScalarFieldEnum', description: undefined })
