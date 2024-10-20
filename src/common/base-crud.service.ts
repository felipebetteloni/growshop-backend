import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BaseCrudService<
  T,
  FindFirstArg,
  FindUniqueArg,
  FindManyArg,
  GroupByArg,
  AggregateArg,
  CreateArg,
  CreateManyArg,
  UpdateArg,
  UpdatedManyArg,
  DeleteArg,
  DeleteManyArg,
> {
  readonly logger: Logger;
  readonly modelName: string;
  
  constructor(public prisma: PrismaService) {
    this.modelName = this.getModelName();
    this.logger = new Logger(this.modelName);
  }

  async findFirst(args: FindFirstArg): Promise<T | null> {
    try {
      return await this.prisma[this.modelName].findFirst(args);
    } catch (e) {
      return undefined;
    }
  }

  findUnique(args: FindUniqueArg): Promise<T | null> {   
    return this.prisma[this.modelName].findUnique(args);
  }

  findMany(args: FindManyArg): Promise<T[]> {
    return this.prisma[this.modelName].findMany(args);
  }

  groupBy(args: GroupByArg) {
    return this.prisma[this.modelName].groupBy(args);
  }

  aggregate(args: AggregateArg) {
    return this.prisma[this.modelName].aggregate(args);
  }
  

  create(args: CreateArg): Promise<T> {
    console.log(this.modelName);
    console.log(this.prisma[this.modelName])
    return this.prisma[this.modelName].create(args);
  }

  createMany(args: CreateManyArg) {
    return this.prisma[this.modelName].createMany(args);
  }


  update(args: UpdateArg): Promise<T> {
    console.log(args);
    return this.prisma[this.modelName].update(args);
  }

  updateMany(args: UpdatedManyArg): Promise<T[]> {
    return this.prisma[this.modelName].updateMany(args);
  }

  

  delete(args: DeleteArg): Promise<T> {
    return this.prisma[this.modelName].delete(args);
  }

  deleteMany(args: DeleteManyArg): Promise<T[]> {
    return this.prisma[this.modelName].deleteMany(args);
  }

  includeCount() {
    return {
      _count: true
    }
  }

  private getModelName(): string {
    return this.constructor.name.replace('Service', '');
  }
}