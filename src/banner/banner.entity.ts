import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';
import 'reflect-metadata';


@ObjectType()
export class Banner {
  @Field()
  id: string;

  @Field()
  @MinLength(3)
  @MaxLength(200)
  title: string;

  @Field((type) => String, { nullable: true })
  text?: string;

  @Field((type) => String, { nullable: true })
  imgUrl?: string;

  @Field((type) => String, { nullable: true })
  link?: string;

  @Field((type) => Date)
  createdAt?: Date;
  
  @Field((type) => Boolean, { nullable: true })
  isActive?: boolean | null;

  @Field((type) => Int, { nullable: true })
  sorting?: number;

  @Field((type) => Int, { nullable: true })
  viewCount?: number;

  @Field((type) => Int, { nullable: true })
  clickCount?: number;
}
