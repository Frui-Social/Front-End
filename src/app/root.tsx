import {
    Links,
    LinksFunction,
    LiveReload,
    Meta,
    MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'remix';
import theme from '~/index.css';

import logo from '../images/logo2.svg';

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: theme }]
};

export const meta: MetaFunction = () => {
    return { title: 'Frui Social' };
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <Meta />

                <Links />
            </head>
            <body>
                <img src={logo} alt="Frui Social" />

                <Outlet />

                <ScrollRestoration />

                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
