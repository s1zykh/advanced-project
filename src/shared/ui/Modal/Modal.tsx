import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export function Modal(props: ModalProps) {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [ isClosing, setIsClosing ] = useState(false);
    const [ isMonted, setIsMonted ] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosed]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMonted(true);
        }
    }, [ isOpen ]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [ onClose ]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [ closeHandler ]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [ isOpen, onKeyDown ]);

    if (lazy && !isMonted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [ className ])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
}
