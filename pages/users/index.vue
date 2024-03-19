<template>
  <v-container class="h-screen" fluid>
    <v-row justify="center">
      <div class="text-center">
        <h3 class="text-white text-decoration-underline">Lista de Usuarios</h3>
      </div>
      <v-col cols="12">
        <v-card width="auto" class="v-card-style">
          <v-card-text>
            <tableStore></tableStore>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "UsersList",
};
</script>