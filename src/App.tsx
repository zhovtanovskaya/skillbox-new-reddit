import React from "react";
import { CardsList } from "./shared/CardsList/CardsList";
import { Content } from "./shared/Content/Content";
import { Header } from './shared/Header/Header';
import { Layout } from './shared/Layout/Layout';

export function App() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
}
