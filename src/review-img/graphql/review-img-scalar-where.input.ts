import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewImgScalarWhereInput {

    @Field(() => [ReviewImgScalarWhereInput], {nullable:true})
    AND?: Array<ReviewImgScalarWhereInput>;

    @Field(() => [ReviewImgScalarWhereInput], {nullable:true})
    OR?: Array<ReviewImgScalarWhereInput>;

    @Field(() => [ReviewImgScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewImgScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imgUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    reviewId?: StringFilter;
}
