<template>
    <v-card class="mx-auto" width="256" elevation="0">
        <v-layout>
            <v-navigation-drawer absolute permanent>
                <v-list>
                    <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="john@google.com"
                        title="John Leider">
                        <template v-slot:append>
                            <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list :lines="false" density="compact" nav>
                    <v-list-item 
                        v-for="(item, i) in items" 
                        :key="i" 
                        :value="item" 
                        color="primary"
                        :prepend-icon="item.icon" 
                        :title="item.text"
                        :to="item.link"
                        >
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
    { text: 'Usuários', icon: 'mdi-account-multiple', link: '/users' },
    { text: 'Notas', icon: 'mdi-star', link: '/notes' },
    { text: 'Histórico', icon: 'mdi-history' },
    { text: 'Avaliações', icon: 'mdi-check-circle' },
    { text: 'Relatório', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' },
]
</script>