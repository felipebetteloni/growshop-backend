import { registerEnumType } from '@nestjs/graphql';

export enum StateScalarFieldEnum {
    id = "id",
    name = "name",
    countryId = "countryId"
}


registerEnumType(StateScalarFieldEnum, { name: 'StateScalarFieldEnum', description: undefined })
