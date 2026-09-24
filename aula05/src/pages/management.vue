<template>
    <v-sheet border rounded>
        <v-data-table :headers="headers" :items="clients">
            <template v-slot:top>
                <v-toolbar>
                    <v-toolbar-title>
                        <v-icon color="medium-emphasis" icon="mdi-account-plus" size="x-small" start></v-icon>
                        Gerenciar Clientes
                    </v-toolbar-title>
                    <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Adicionar" border
                        @click="add"></v-btn>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                    <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>

                    <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
                </div>
            </template>

            <template v-slot:no-data>
                <v-btn prepend-icon="mdi-backup-restore" rounded="lg" text="Carregar Dados" variant="text" border
                    @click="reset"></v-btn>
            </template>
        </v-data-table>
    </v-sheet>


    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title class="bg-blue-darken-4">
                {{ isEditing ? 'Atualizar' : 'Adicionar' }} Cliente
            </v-card-title>
            <v-card-text>
                <v-row> 
                    <v-col cols="12" sm="12">
                        <v-text-field label="Nome" v-model="formModel.name" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Email" v-model="formModel.email" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Telefone" v-model="formModel.phone" />
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="bg-surface-light">
                <v-btn text="Cancelar" variant="plain" @click="dialog = false"></v-btn>

                <v-spacer></v-spacer>

                <v-btn text="Salvar" @click="save"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { onMounted, ref, shallowRef, computed } from 'vue'

function createNewRecord() {
    return {
        id: '',
        name: '',
        email: '',
        phone: '',
    }
}

const clients = ref([])
const formModel = ref(createNewRecord())
const dialog = shallowRef(false)
const isEditing = computed( ()=> formModel.value.id !== '' );


const headers = [
    { title: 'Id', key: 'id', align: 'start' },
    { title: 'Nome', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Telefone', key: 'phone', align: 'end' },
    { title: 'Ações', key: 'actions', align: 'end', sortable: false },
]

onMounted(() => {
    reset()
})

function add() {
    formModel.value = createNewRecord()
    dialog.value = true
}

function edit(id) {
    const found = clients.value.find(client => client.id === id)

    formModel.value = {
        id: found.id,
        name: found.name,
        email: found.email,
        phone: found.phone,
    }

    dialog.value = true
}

function remove(id) {
    const index = clients.value.findIndex(client => client.id === id)
    clients.value.splice(index, 1)
}

function save() {
    if (isEditing.value) {
        const index = clients.value.findIndex(client => client.id === formModel.value.id)
        clients.value[index] = formModel.value
    } else {
        formModel.value.id = clients.value.length + 1
        clients.value.push(formModel.value)
    }

    dialog.value = false
}

function reset() {
    dialog.value = false
    formModel.value = createNewRecord()
    clients.value = []
}
</script>