import { registerEnumType } from '@nestjs/graphql';

export enum ReportScalarFieldEnum {
    userId = "userId",
    productId = "productId",
    text = "text"
}


registerEnumType(ReportScalarFieldEnum, { name: 'ReportScalarFieldEnum', description: undefined })
