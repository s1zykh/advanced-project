import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import cls from './ArticleCodeBlockComponent.module.scss';
import type { ArticleCodeBlock } from '../../model/types/article';

import { Code } from '@/shared/ui/Code/Code';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    },);
