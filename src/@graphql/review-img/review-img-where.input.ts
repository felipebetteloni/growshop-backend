import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReviewRelationFilter } from '../review/review-relation-filter.input';

@InputType()
export class ReviewImgWhereInput {

    @Field(() => [ReviewImgWhereInput], {nullable:true})
    AND?: Array<ReviewImgWhereInput>;

    @Field(() => [ReviewImgWhereInput], {nullable:true})
    OR?: Array<ReviewImgWhereInput>;

    @Field(() => [ReviewImgWhereInput], {nullable:true})
    NOT?: Array<ReviewImgWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imgUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    reviewId?: StringFilter;

    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: ReviewRelationFilter;
}
