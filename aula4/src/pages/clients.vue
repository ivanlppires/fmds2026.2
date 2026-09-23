<template>
  <v-sheet border rounded>
    <v-data-table
      :headers="headers"
      :hide-default-footer="clients.length < 11"
      :items="clients"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon color="medium-emphasis" icon="mdi-client-multiple" size="x-small" start></v-icon>

            Popular clients
          </v-toolbar-title>

          <v-btn
            class="me-2"
            prepend-icon="mdi-plus"
            rounded="lg"
            text="Add a client"
            border
            @click="add"
          ></v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.title="{ value }">
        <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-client" label>
          <template v-slot:prepend>
            <v-icon color="medium-emphasis"></v-icon>
          </template>
        </v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>

          <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
        </div>
      </template>

      <template v-slot:no-data>
        <v-btn
          prepend-icon="mdi-backup-restore"
          rounded="lg"
          text="Reset data"
          variant="text"
          border
          @click="reset"
        ></v-btn>
      </template>
    </v-data-table>
  </v-sheet>

  <v-dialog v-model="dialog" max-width="500">
    <v-card
      :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite client`"
      :title="`${isEditing ? 'Edit' : 'Add'} a client`"
    >
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formModel.name" label="Nome"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="formModel.surname" label="Sobrenome"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="formModel.email" label="Email"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="formModel.birthDate" label="Data de Nascimento"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="formModel.phone" label="Telefone"></v-text-field>
          </v-col>

        </v-row>
      </template>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
  import { onMounted, ref, shallowRef, toRef } from 'vue'

  const currentYear = new Date().getFullYear()

  function createNewRecord () {
    return {
      title: '',
      author: '',
      genre: '',
      year: currentYear,
      pages: 1,
    }
  }

  const clients = ref([])
  const formModel = ref(createNewRecord())
  const dialog = shallowRef(false)
  const isEditing = toRef(() => !!formModel.value.id)

  const headers = [
    { title: 'Nome', key: 'name', align: 'start' },
    { title: 'Sobrenome', key: 'surname' },
    { title: 'Email', key: 'email' },
    { title: 'Data de Nascimento', key: 'birthDate', align: 'end' },
    { title: 'Telefone', key: 'phone', align: 'end' },
    { title: 'Actions', key: 'actions', align: 'end', sortable: false },
  ]

  onMounted(() => {
    reset()
  })

  function add () {
    formModel.value = createNewRecord()
    dialog.value = true
  }

  function edit (id) {
    const found = clients.value.find(client => client.id === id)

    formModel.value = {
      id: found.id,
      name: found.name,
      surname: found.surname,
      email: found.email,
      birthDate: found.birthDate,
      phone: found.phone,
    }

    dialog.value = true
  }

  function remove (id) {
    const index = clients.value.findIndex(client => client.id === id)
    clients.value.splice(index, 1)
  }

  function save () {
    if (isEditing.value) {
      const index = clients.value.findIndex(client => client.id === formModel.value.id)
      clients.value[index] = formModel.value
    } else {
      formModel.value.id = clients.value.length + 1
      clients.value.push(formModel.value)
    }

    dialog.value = false
  }

  function reset () {
    dialog.value = false
    formModel.value = createNewRecord()
    clients.value = []
  }
</script>