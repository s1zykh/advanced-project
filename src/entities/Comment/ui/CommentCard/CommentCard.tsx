import { memo } from 'react';

import cls from './CommentCard.module.scss';
import type { Comment } from '../../model/types/comment';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.CommentCard, {}, [className])}
                gap="8"
                maxdata-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            data-testid="CommentCard.Content"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
