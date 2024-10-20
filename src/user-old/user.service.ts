import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, UserRole } from './user.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    }) as any;
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async create(email: string) {
    await this.prismaService.user.create({
      data: {
        email,
        role: UserRole.USER,
      },
    });
  }

  async delete(id: string) {
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  async deleteByEmail(email: string) {
    await this.prismaService.user.delete({
      where: {
        email,
      },
    });
  }
}
