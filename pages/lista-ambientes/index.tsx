import React, { useEffect, useState } from "react";
import styles from "@/pages/lista-ambientes/lista-ambientes.module.css";
import Header from "@/components/header/header";
import Pagination from "@/components/pagination/pagination";
import { listarLocalizacao } from "../api/localizacao";

interface Localizacao {
  localizacaoID: string;
  nomeLocal: string;
  localSAP: number;
  descricaoSAP: string;
  areaID: string;
  nomeResponsavel: string;
}

const ListaLocais = () => {
  const [localizacao, setLocalizacao] = useState<Localizacao[]>([]);

  async function listar() {
    try {
      const lista = await listarLocalizacao();
      console.log(lista.data);
      setLocalizacao(lista.data);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.page_content}>
        <section className={`${styles.page_header} ${styles.layout_guide}`}>
          <h1>Ambientes</h1>

          <form className={styles.search_area}>
            <input type="search" placeholder="Pesquise o ambiente" />

            <button type="button">
              <i className="fa-solid fa-sliders"></i>
            </button>
          </form>
        </section>

        <section className={`${styles.table_section} ${styles.layout_guide}`}>
          <table className={styles.environment_table}>
            <thead>
              <tr>
                <th>Local</th>
                <th>Responsável</th>
                <th>Detalhes</th>
              </tr>
            </thead>

            <tbody>
              {localizacao.length > 0 ? (
                localizacao.map((item) => (
                  <tr key={item.localizacaoID}>
                    <td>{item.nomeLocal}</td>

                    <td>{item.nomeResponsavel}</td>
                    <td>
                      <a
                        href={`/detalhe-patrimonio/${item.localizacaoID}`}
                        aria-label="Ver detalhes do patrimônio"
                      >
                        <i className="fa-solid fa-circle-info"></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>Nenhum local encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <Pagination />
      </main>
    </>
  );
};

export default ListaLocais;
