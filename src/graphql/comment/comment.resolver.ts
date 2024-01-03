import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { CommentEntity } from '../entity/comment.entity';
import { users, posts } from '../db';

@Resolver(() => CommentEntity)
export class CommentResolver {
    @ResolveField()
    author(@Parent() comment) {
        return users.find((user) => user.id === comment.authorId);
    }
    @ResolveField()
    post(@Parent() comment) {
        return posts.find((post) => post.id === comment.postId);
    }
}
