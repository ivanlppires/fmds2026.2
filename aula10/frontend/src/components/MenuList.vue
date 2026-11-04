<template>
    <v-card class="mx-auto" max-width="300" elevation="0">
        <v-list density="compact">
            <v-list-subheader>Menu</v-list-subheader>

            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :to="item.link">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script setup>
const items = [
    { text: 'Início', icon: 'mdi-home', link: '/' },
    { text: 'Alunos', icon: 'mdi-account', link: '/alunos' },
]
</script>