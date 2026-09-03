<script setup>
/* hoje vamos ver:
 v-for, v-if, v-else, v-else-if, v-show,
 v-bind, v-on, v-model, computed, watch, onmounted, ref
 */
import { ref } from "vue";

const pecas = ref([
  { id: 1, nome: "Pneu", quantidade: 10, preco: 100 },
  { id: 2, nome: "Amortecedor", quantidade: 5, preco: 200 },
  { id: 3, nome: "Filtro de óleo", quantidade: 15, preco: 50 },
]);

const perfumes = ref([
  { id: 100, nome: "212 Vip", quantidade: 20, preco: 150 },
  { id: 205, nome: "Al Noble", quantidade: 0, preco: 250 },
  { id: 312, nome: "Joomp", quantidade: 15, preco: 300 },
  { id: 440, nome: "Cebolinha", quantidade: 15, preco: 300 },
]);

const logado = ref(true);
const logar = () => {
  if (user.value.name === 'joao'
    && user.value.pass === '123')
    logado.value = true;
  else
    alert('usuario ou senha incorretos');
};
const user = ref({ name: '', pass: '' });
const removerId = (id) => {
  // retorne todos com id diferente do id passado
  perfumes.value = perfumes.value.filter(p => p.id !== id);
}
const removerIndex = (i) => {
  // na posição i remova 1 elemento 
  perfumes.value.splice(i, 1);
}
const novaPeca = ref({ nome: '', quantidade: 0, preco: 0 });

const salvarPeca = () => {
  // adicione a nova peça no vetor de peças

  if (editIndex.value != -1) {
    pecas.value[editIndex.value] = novaPeca.value
    editIndex.value = -1;
  } else {
    alert('cadastrar')
    novaPeca.value.id = Date.now();
    pecas.value.push({ ...novaPeca.value });
  }
  novaPeca.value = { nome: '', quantidade: 0, preco: 0 };
}
const editar = (index) => {
  novaPeca.value = { ...pecas.value[index] };
  editIndex.value = index;
}
const editIndex = ref(-1);
</script>

<template>
  <header>
    <h1>Lista de peças & perfumes</h1>
  </header>
  <main>
    <section v-if="!logado">
      <p>Faça Login</p>
      <i>Faça o login se o usuario for joao e senha 123</i>
      <br>
      <input type="text" placeholder="usuario" v-model="user.name">
      <input type="password" placeholder="senha" v-model="user.pass" />
      <button @click="logar">Entrar</button>
    </section>
    <section v-else>
      <section>
        <button @click="logado = false">Sair</button>
        <h2>Peças</h2>

        <p>Adicionar novas peças</p>
        <label for="pecaNome">Nome</label>
        <input type="text" id="pecaNome" v-model="novaPeca.nome">

        <label for="pecaQuantidade">Quantidade</label>
        <input type="number" id="pecaQuantidade" v-model="novaPeca.quantidade">

        <label for="pecaPreco">Preço</label>
        <input type="number" id="pecaPreco" v-model="novaPeca.preco">

        <button @click="salvarPeca">Salvar</button>

        <ul>
          <li v-for="(peca, index) in pecas" :key="peca.id">
            <small>ID: {{ peca.id }}</small><br>
            <b>{{ peca.nome }}</b><br>
            <i> {{ peca.quantidade }} unidades</i>
            - <u>R$ {{ peca.preco }} </u>
            <button @click="editar(index)">Editar</button>
          </li>
        </ul>
      </section>
      <section>
        <h2>Perfumes</h2>
        <!-- faça uma TABELA de perfumes usando v-for -->
        <table border="1">
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
          <tr v-for="(p, index) in perfumes" :key="p.id">
            <td v-html="p.nome"></td>
            <td v-html="p.quantidade"></td>
            <td v-html="p.preco"></td>
            <td>
              <button @click="removerId(p.id)">Remover</button>
              <button @click="removerIndex(index)">Remover</button>
            </td>
          </tr>
        </table>
        <br><br>
      </section>
    </section>
  </main>

</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
