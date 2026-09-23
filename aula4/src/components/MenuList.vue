<template>
    <v-card class="mx-auto" width="256" elevation="0">
        <v-layout>
            <v-navigation-drawer absolute permanent>
                <v-list>
                    <v-list-item
                        prepend-avatar="https://lh3.googleusercontent.com/a/ACg8ocKnwj66cHiyIRCP6K33_hBAYmdJeDS6G2O68vaYGMghmbqVFtPHFQ=s288-c-no"
                        subtitle="ivanpires@unemat.br"
                        title="Ivan Pires">
                        <template v-slot:append>
                            <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list :lines="false" density="compact" nav>
                    <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary"
                        :prepend-icon="item.icon" :title="item.text" :to="item.link">
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 354px;"></v-main>
        </v-layout>
    </v-card>
</template>
<script setup>
const items = [
    { text: 'Início', icon: 'mdi-folder', link: '/' },
    { text: 'Clientes', icon: 'mdi-account-multiple', link: '/clients' },
    { text: 'Relatórios', icon: 'mdi-star', link: '/dashboard' },
    { text: 'Configurações', icon: 'mdi-history', link: '/settings' },
]
</script>