import { registerEnumType } from '@nestjs/graphql';

export enum BannerScalarFieldEnum {
    id = "id",
    title = "title",
    text = "text",
    imgUrl = "imgUrl",
    link = "link",
    createdAt = "createdAt",
    isActive = "isActive",
    sorting = "sorting",
    viewCount = "viewCount",
    clickCount = "clickCount"
}


registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
