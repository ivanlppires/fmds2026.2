<template>
  <v-container>
    <v-row>
      <v-col cols="6" v-for="p in produtos" :key="p.id">
        <v-card>
          <v-card-title>
            {{ p.nome }}
          </v-card-title>
          <v-card-text> R${{ p.valor }} | {{ p.quantidade }} un.</v-card-text>
          <v-card-actions>
            <v-btn @click="edicao(p)">Editar</v-btn>
            <v-btn @click="remove(p.id)">Remover</v-btn>
            <v-btn @click="vender(p)">Vender</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="editar" max-width="500">
      <v-card>
        <v-card-title>
          Adicionar Produto
        </v-card-title>
        <v-card-text>
          <v-text-field label="Nome" v-model="edit.nome"></v-text-field>
          <v-text-field label="Valor" v-model="edit.valor"></v-text-field>
          <v-text-field label="Quantidade" v-model="edit.quantidade"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="salvar">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/utils/supabase.js'
const produtos = ref([]);
const editar = ref(false);
const edit = ref({ nome: '', valor: 0, quantidade: 0 });

const getProdutos = async () => {
  const { data } = await supabase.from('produtos').select().order('id', { ascending: true });
  produtos.value = data;
}
const remove = async (id) => {
  const { error } = await supabase.from('produtos').delete().eq('id', id)
  if (!error) {
    getProdutos()
  }
}
const edicao = (p) => {
  editar.value = true;
  edit.value = { ...p }
}
const salvar = async () => {
  await supabase.from('produtos').update({ ...edit.value }).eq('id', edit.value.id);
  editar.value = false;
  getProdutos()
}

const vender = async (p) => {
  const { error } = await supabase.from('produtos').update({ quantidade: p.quantidade - 1 }).eq('id', p.id);
  if (!error) {
    getProdutos()
  }
}

onMounted(() => {
  console.log('buscando os dados do supabase')
  getProdutos()
});

</script>