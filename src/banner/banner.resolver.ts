import { Logger } from '@nestjs/common';
import {
  Args,
  Context,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  registerEnumType,
  Resolver,
} from '@nestjs/graphql';
import { Banner } from './banner.entity';
import { BannerService } from './banner.service';
import { SortOrder } from 'src/common/SortOrder';

@InputType()
export class BannerCreateInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  text: string;

  @Field((type) => String, { nullable: true })
  imgUrl?: string;

  @Field((type) => String, { nullable: true })
  link?: string;

  @Field((type) => Int, { nullable: true })
  sorting?: number;
}

@InputType()
export class ResortingInput {
  @Field()
  id: string;

  @Field((type) => Int)
  newPosition: number;
}

@InputType()
class BannerOrderByUpdatedAtInput {
  @Field((type) => SortOrder)
  updatedAt: SortOrder
}

registerEnumType(SortOrder, {
  name: 'SortOrder',
})

@Resolver(() => Banner)
export class BannerResolver {
  private readonly logger = new Logger(BannerResolver.name);

  constructor(private readonly bannerService: BannerService) {}

  @Query(() => [Banner], { name: 'banners' })
  async findAll() {
    return this.bannerService.findAll();
  }

  @Query(() => [Banner], { name: 'active_banners' })
  async findAllActive() {
    return this.bannerService.findAllActive();
  }

  @Query((returns) => Banner, { nullable: true })
  async findById(@Args('id') id: string) {
    return this.bannerService.findById({id: id});
  }

  /*
  @Query((returns) => [Banner])
  async find(
    @Args('searchString', { nullable: true }) searchString: string,
    @Args('skip', { nullable: true }) skip: number,
    @Args('take', { nullable: true }) take: number,
    @Args('orderBy', { nullable: true }) orderBy: BannerOrderByUpdatedAtInput,
    @Context() ctx,
  ) {
    const or = searchString
      ? {
          OR: [
            { title: { contains: searchString } },
            { content: { contains: searchString } },
          ],
        }
      : {}

    return this.prismaService.post.findMany({
      where: {
        published: true,
        ...or,
      },
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined,
    })
  }
  */

  @Mutation((returns) => Banner)
  async createBanner(
    @Args('data') data: BannerCreateInput,
    @Context() ctx,
  ): Promise<Banner> {
    return this.bannerService.create(data);
  }
  
  @Mutation((returns) => Banner)
  async createBanner(
    @Args('data') data: BannerCreateInput,
    @Context() ctx,
  ): Promise<Banner> {
    return this.bannerService.create(data);
  }

  @Mutation((returns) => Banner, { nullable: true })
  async toggleActiveBanner(@Args('id') id: string): Promise<Banner | null> {
    return this.bannerService.toggleActiveBanner(id);
  }

  @Mutation((returns) => Banner)
  async incrementViewCount(@Args('id') id: string): Promise<Banner> {
    return this.bannerService.incrementViewCount(id);
  }

  @Mutation((returns) => Banner)
  async incrementClickCount(@Args('id') id: string): Promise<Banner> {
    return this.bannerService.incrementClickCount(id);
  }

  @Mutation((returns) => [Banner])
  async resorting(@Args('data') data: ResortingInput): Promise<Banner[]> {
    return this.bannerService.resorting(data.id, data.newPosition);
  }
}
