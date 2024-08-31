import { CSSProperties, useMemo } from 'react';

import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';
import { AppImage } from '../AppImage';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;
    const fallback = <Skeleton border="50%" width={size} height={size} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
