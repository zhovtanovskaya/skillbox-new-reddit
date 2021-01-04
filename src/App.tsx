import React from "react";
import { Content } from "./shared/Content/Content";
import { Header } from './shared/Header/Header';
import { Layout } from './shared/Layout/Layout';

export function App() {
    return (
        <Layout>
            <Header />
            <Content>
                Content.
            </Content>
        </Layout>
    );
}
