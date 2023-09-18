import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import React from "react";
import {YMaps} from "@pbe/react-yandex-maps";

render(
    <BrowserRouter>
        <ThemeProvider>
            <YMaps
                query={{ apikey: 'abf6f29e-7805-4c21-9d41-fd91bfd35987', load: "package.full"}}
                preload={true}
            >
                <App/>
            </YMaps>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)