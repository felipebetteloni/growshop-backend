import { registerEnumType } from '@nestjs/graphql';

export enum GlobalSettingsScalarFieldEnum {
    id = "id",
    description = "description",
    value = "value",
    createdAt = "createdAt",
    isActive = "isActive"
}


registerEnumType(GlobalSettingsScalarFieldEnum, { name: 'GlobalSettingsScalarFieldEnum', description: undefined })
