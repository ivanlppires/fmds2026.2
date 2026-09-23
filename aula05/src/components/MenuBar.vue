<template>
    <v-navigation-drawer v-model="drawer">
        <v-sheet class="pa-4" color="grey-lighten-4">
            <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

            <div>john@google.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text"
                link></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
const links = [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
]
</script>