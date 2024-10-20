import { registerEnumType } from '@nestjs/graphql';

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    stateId = "stateId"
}


registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
