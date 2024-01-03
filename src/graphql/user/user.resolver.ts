import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { UserEntity } from '../entity/user.entity';
import { posts } from '../db';

@Resolver(() => UserEntity)
export class UserResolver {
    @ResolveField()
    posts(@Parent() user) {
        return posts.filter((post) => post.authorId === user.id);
    }
}
