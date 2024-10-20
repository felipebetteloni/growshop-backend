import { registerEnumType } from '@nestjs/graphql';

export enum ConditionScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(ConditionScalarFieldEnum, { name: 'ConditionScalarFieldEnum', description: undefined })
