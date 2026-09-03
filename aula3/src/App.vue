<script setup>
/* hoje vamos ver:
 v-for, v-if, v-else, v-else-if, v-show,
 v-bind, v-on, v-model, computed, watch, onmounted, ref
 */
import { ref } from "vue";

const pecas = ref([
  { id: 1, nome: "Junta homocinética", quantidade: 10, preco: 100 },
  { id: 2, nome: "Semi eixo", quantidade: 5, preco: 200 },
  { id: 3, nome: "Bieleta", quantidade: 0, preco: 50 },
  { id: 4, nome: "Amortecedor", quantidade: 15, preco: 300 },
]);
const perfumes = ref([
  { id: 1, nome: "212 Vip", quantidade: 20, preco: 150 },
  { id: 2, nome: "Al Noble", quantidade: 0, preco: 250 },
  { id: 3, nome: "Joomp", quantidade: 15, preco: 300 },
  { id: 4, nome: "Cebolinha", quantidade: 15, preco: 300 },
]);

const logado = ref(false);
const logar = () => {
  logado.value = true;
};
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
      <button @click="logar">Entrar</button>
    </section>
    <section v-else>
      <section>
        <button @click="logado = false">Sair</button>
        <h2>Peças</h2>
        <ul>
          <li v-for="peca in pecas" :key="peca.id">
            <b>{{ peca.nome }}</b><br>
            <i> {{ peca.quantidade }} unidades</i>
            - <u>R$ {{ peca.preco }} </u>
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
          </tr>
          <tr v-for="p in perfumes" :key="p.id">
            <td v-html="p.nome"></td>
            <td v-html="p.quantidade"></td>
            <td v-html="p.preco"></td>
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
