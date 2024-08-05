import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import 'reflect-metadata';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  @MinLength(3)
  @IsEmail()
  email: string;

  @Field(() => UserRole)
  roles: UserRole;

  @Field()
  @IsPhoneNumber('BR')
  phone: string;

  @Field()
  @IsDate()
  @Type(() => Date)
  created_at: Date;

  @Field()
  @IsDate()
  @Type(() => Date)
  updated_at: Date;

  @Field()
  is_premium: string;

  @Field(() => [String])
  favorites: string[];
}

registerEnumType(UserRole, {
  name: 'UserRole',
});
