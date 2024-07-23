import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispacth = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispacth(userActions.initAuthData());
    }, [ dispacth ]);

    return (
        <div className={classNames('app', {}, [ theme ])}>
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
