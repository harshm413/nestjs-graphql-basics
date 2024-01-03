import { ObjectType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';

@ObjectType('Post')
export class PostEntity {
    id: string;
    title: string;
    content: string;
    author: UserEntity;
    comments: CommentEntity[];
}
