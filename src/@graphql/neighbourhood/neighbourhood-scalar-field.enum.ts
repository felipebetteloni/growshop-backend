import { registerEnumType } from '@nestjs/graphql';

export enum NeighbourhoodScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId"
}


registerEnumType(NeighbourhoodScalarFieldEnum, { name: 'NeighbourhoodScalarFieldEnum', description: undefined })
