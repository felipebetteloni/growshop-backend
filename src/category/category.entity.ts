import { Field, ObjectType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';
import 'reflect-metadata';


@ObjectType()
export class Category {
  @Field()
  id: string;

  @Field()
  @MinLength(3)
  @MaxLength(200)
  name: string;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;


  //Product     Product[]
  //SubCategory SubCategory[]
}
