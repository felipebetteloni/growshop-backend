import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Banner } from './banner.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class BannerService {
  private readonly logger = new Logger(BannerService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async findById(
    bannerWhereUniqueInput: Prisma.BannerWhereUniqueInput,
  ): Promise<Banner | null> {
    return this.prismaService.banner.findUnique({
      where: bannerWhereUniqueInput,
    });
  }

  async findAll() {
    return this.prismaService.banner.findMany();
  }

  async findAllActive() {
    return this.prismaService.banner.findMany({
      where: {
        isActive: true,
      },
    });
  }

  async create(banner: Prisma.BannerCreateInput) {
    if (banner.sorting) {
      const bannerWithSameSorting = await this.prismaService.banner.findFirst({
        where: {
          isActive: true || undefined,
          sorting: banner.sorting,
        },
        select: {
          id: true,
        },
      });

      if (bannerWithSameSorting) {
        throw new Error('There is an active banner with the same sorting');
      }
    } else {
      const maxSorting = await this.getMaxSorting();
      banner.sorting = maxSorting + 1;
    }

    return await this.prismaService.banner.create({
      data: banner,
    });
  }

  async update(params: {
    where: Prisma.BannerWhereUniqueInput;
    data: Prisma.BannerUpdateInput;
  }): Promise<Banner> {
    const { where, data } = params;
    return this.prismaService.banner.update({
      data,
      where,
    });
  }

  async delete(id: Banner['id']) {
    await this.prismaService.banner.delete({
      where: {
        id,
      },
    });
  }

  async toggleActiveBanner(id: Banner['id']): Promise<Banner | null> {
    const banner = await this.prismaService.banner.findUnique({
      where: { id: id || undefined },
      select: {
        isActive: true,
        sorting: true,
      },
    });

    let sortingField = {};

    if (!banner.isActive) {
      const maxSorting = await this.getMaxSorting();
      sortingField = {
        sorting: maxSorting + 1,
      };
    }

    return this.prismaService.banner.update({
      where: { id: id || undefined },
      data: { isActive: !banner?.isActive, ...sortingField },
    });
  }

  async incrementViewCount(id: Banner['id']): Promise<Banner> {
    return this.prismaService.banner.update({
      where: { id },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });
  }

  async incrementClickCount(id: Banner['id']): Promise<Banner> {
    return this.prismaService.banner.update({
      where: { id },
      data: {
        clickCount: {
          increment: 1,
        },
      },
    });
  }

  async getMaxSorting(): Promise<Banner["sorting"]> {
    const allActive = await this.findAllActive();
    const maxSorting = Math.max(...allActive.map((active) => active.sorting));
    return maxSorting;
  }

  async resorting(id: Banner['id'], newPosition: Banner["sorting"]): Promise<Banner[]> {
    const allActive = await this.findAllActive();
    const banner = allActive.find(banner => banner.id === id);
    banner.sorting = newPosition;

    const allGreaterOrEqual = allActive.filter(banner => banner.sorting >= newPosition && banner.id !== id);
    allGreaterOrEqual.forEach(banner => {
      banner.sorting = banner.sorting + 1;
    });

    console.log([banner, ...allGreaterOrEqual])

    return [banner, ...allGreaterOrEqual];
  }
}
