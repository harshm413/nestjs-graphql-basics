import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PostEntity } from '../entity/post.entity';
import { users, comments } from '../db';

@Resolver(() => PostEntity)
export class PostResolver {
    @ResolveField()
    author(@Parent() post) {
        return users.find((user) => user.id === post.authorId);
    }
    @ResolveField()
    comments(@Parent() post) {
        return comments.filter((comment) => comment.postId === post.id);
    }
}
