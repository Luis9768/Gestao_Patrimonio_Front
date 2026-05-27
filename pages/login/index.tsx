import React, { useState } from "react";
import styles from "@/pages/login/login.module.css";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../api/authService";

const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const router = useRouter();
  const notificacao = (msg: string) => toast(msg);
  const erro = (msg: string) => toast.error(msg);

  async function autenticar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(email, senha);
      notificacao("Login bem sucedido!");

      setTimeout(() => {
        router.push("/lista-ambientes");
      }, 2000); // 2 segundos
    } catch (error: any) {
      erro(error.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <main className={styles.login_page}>
        <section
          className={styles.login_banner}
          aria-label="Apresentação do sistema"
        >
          <img
            src="../imgs/Imagem_do_login.png"
            alt="Imagem de fundo relacionada à tecnologia"
            className={styles.banner_image}
          />

          <div className={styles.banner_overlay}></div>
          <div className={styles.banner_content}>
            <img
              src="../imgs/Logo Senai.png"
              alt="Logo do SENAI"
              className={styles.senai_logo}
            />

            <h2>Gestão de patrimônios</h2>

            <p className={styles.banner_content_text}>
              Controle, organização e transparência do patrimônio com
              eficiência.
            </p>
          </div>
        </section>

        <section className={styles.login_area} aria-label="Formulário de login">
          <form className={styles.login_form} onSubmit={autenticar}>
            <h1>Login</h1>

            <div className={styles.form_group}>
              <label htmlFor={styles.nif}>NIF:</label>
              <input
                type="text"
                id={styles.nif}
                name="nif"
                placeholder="Insira o seu NIF"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor={styles.senha}>Senha:</label>

              <div className={styles.password_field}>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id={styles.senha}
                  name="senha"
                  placeholder="Insira a sua senha"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <button
                  type="button"
                  className={styles.show_password}
                  aria-label="Mostrar senha"
                  onClick={alternarVisibilidadeSenha}
                >
                  👁
                </button>
              </div>
            </div>

            <button type="submit" className={styles.login_button}>
              Entrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
