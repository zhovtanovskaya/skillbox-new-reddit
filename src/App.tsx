import React from "react";
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

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
