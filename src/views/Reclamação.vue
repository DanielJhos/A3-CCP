<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Faça sua Reclamação</h5>
            <form
                class="form-signin"
                @submit.prevent="onSubmit"
                id="signup-form"
              >
              <div class="form-label-group">
                <input
                  type="text"
                  id="inputUserame"
                  v-model="reclamacao.nome"
                  class="form-control"
                  placeholder="Nome"
                  required
                  autofocus
                />
                <label for="inputUserame">Nome Completo</label>
              </div>

              <div class="form-label-group">
                <input
                  type="text"
                  id="inputEmail"
                  v-model="reclamacao.bairro"
                  class="form-control"
                  placeholder="Email address"
                  required
                />
                <label for="inputEmail">Bairro</label>
              </div>

              <div class="form-label-group">
                <input
                  type="text"
                  id="inputPassword"
                  v-model="reclamacao.rua"
                  class="form-control"
                  placeholder="text"
                  required
                />
                <label for="inputPassword">Rua</label>
              </div>

              <div class="form-label-group">
                <input
                  type="text"
                  id="inputConfirmPassword"
                  v-model="reclamacao.Complemento"
                  class="form-control"
                  placeholder="text"
                  required
                />
                <label for="inputConfirmPassword">Complemento</label>
              </div>

              <div class="form-group">
                <label for="inputTextArea"
                  >Explique seu problema</label
                >
                <textarea
                  class="form-control"
                  id="inputTextArea"
                  v-model="reclamacao.problema"
                  rows="3"
                ></textarea>
              </div>
              <form action="">
                <div class="form-group">
                  <label for="exampleFormControlFile1">Fotos</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </form>

              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../database/firebase";

export default {
  data() {
    return {
      reclamacao: {},
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      db.collection("reclamacao")
        .add(this.reclamacao)
        .then(() => {
          alert("RECLAMAÇÃO SUCEDIDO");
          this.reclamacao.nome = "";
          this.reclamacao.bairro = "";
          this.reclamacao.rua = "";
          this.reclamacao.complemento = "";
          this.reclamacao.problema = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #6e7985, #6e7985);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(153, 9, 9, 0.1);
  overflow: hidden;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-img-left {
  width: 45%;
  background: scroll center
    url("https://source.unsplash.com/WEQbe2jBg40/414x512");
  background-size: cover;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
</style>