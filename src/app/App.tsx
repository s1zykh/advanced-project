import { Suspense, useEffect, useState } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(userActions.initAuthData());
    }, [ dispacth ]);

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className={classNames('app', {}, [ theme ])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
