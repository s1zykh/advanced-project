import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

function App() {
    const { theme } = useTheme();
    const dispacth = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispacth(initAuthData());
    }, [dispacth]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
