import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './config/graphql.config';
import { HealthModule } from './health/health.module';
import { BannerModule } from './banner/banner.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ChatModule } from './chat/chat.module';
import { CityModule } from './city/city.module';
import { CommentModule } from './comment/comment.module';
import { ConditionModule } from './condition/condition.module';
import { CountryModule } from './country/country.module';
import { FavoriteModule } from './favorite/favorite.module';
import { GlobalSettingsModule } from './global-settings/global-settings.module';
import { MessageModule } from './message/message.module';
import { NeighbourhoodModule } from './neighbourhood/neighbourhood.module';
import { NotificationModule } from './notification/notification.module';
import { ProductModule } from './product/product.module';
import { ProductImgModule } from './product-img/product-img.module';
import { ReplyModule } from './reply/reply.module';
import { ReportModule } from './report/report.module';
import { ReviewModule } from './review/review.module';
import { ReviewImgModule } from './review-img/review-img.module';
import { ShareModule } from './share/share.module';
import { StateModule } from './state/state.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    HealthModule,
    BannerModule,    
    BrandModule,
    CategoryModule,
    ChatModule,
    CityModule,
    CommentModule,
    ConditionModule,
    CountryModule,
    FavoriteModule,
    GlobalSettingsModule,
    MessageModule,
    NeighbourhoodModule,
    NotificationModule,
    ProductModule,
    ProductImgModule,
    ReplyModule,
    ReportModule,
    ReviewModule,
    ReviewImgModule,
    ShareModule,
    StateModule,
    SubCategoryModule,
    SubscriptionModule,
    UserModule,
  ],})
export class AppModule {}
