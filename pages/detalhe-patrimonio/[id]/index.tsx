import React, { useEffect, useState } from "react";
import styles from "@/pages/detalhe-patrimonio/[id]/detalhePatrimonio.module.css";
import Header from "@/components/header/header";
import ModalJustificativa from "@/components/modal-justificativa/modal-justificativa";
import { UUID } from "crypto";
import { useParams } from "next/navigation";
import { listarPatrimoniosPorId } from "@/pages/api/patrimonioService";

interface Patrimonio {
  patrimonioID: UUID;
  denominacao: string;
  numeroPatrimonio: number;
  valor: number;
  localizacaoID: UUID;
  statusPatrimonioID: UUID;
}

const DetalhePatrimonio = () => {
  const [isJustficativaOpen, setJustifcativaOpen] = useState(false);
  const [patrimonio, setPatrimonio] = useState<Patrimonio | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params?.id;

  // Alterado para receber o parâmetro tipado como UUID
  async function listarPatrimoniosId(uuid: UUID) {
    try {
      setLoading(true);
      // Removido o Number(id) e passando o UUID diretamente para o serviço
      const response = await listarPatrimoniosPorId(uuid);
      console.log(response);
      setPatrimonio(response);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Garante que o id existe e não é um array antes de prosseguir
    if (!id || Array.isArray(id)) return;

    const timer = setTimeout(() => {
      // Executa passando o id tratado como UUID
      listarPatrimoniosId(id as UUID);
    }, 1000); // 1 segundo

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <Header />
      <main className={styles.page_content}>
        <section
          className={`${styles.page_detalhes} ${styles.layout_guide}`}
          aria-labelledby={styles.titulo_patrimonio}
        >
          <a href="#" className={styles.back_link}>
            <i className="fa-solid fa-arrow-left"></i>
            Voltar
          </a>

          {loading ? (
            <h1 id={styles.titulo_patrimonio}>Carregando dados...</h1>
          ) : (
            <>
              <h1 id={styles.titulo_patrimonio}>
                Patrimônio: {patrimonio?.numeroPatrimonio}
              </h1>

              <article className={styles.patrimonio_card}>
                <div className={styles.patrimonio_content}>
                  <dl>
                    <dt>Denominação</dt>
                    <dd>{patrimonio?.denominacao}</dd>
                  </dl>

                  <dl>
                    <dt>Tipo</dt>
                    <dd>Mesa</dd>
                  </dl>

                  <dl>
                    <dt>Data transferência</dt>
                    <dd>
                      <time dateTime="2026-02-09">09/02/2026</time>
                    </dd>
                  </dl>

                  <dl>
                    <dt>Local Atual</dt>
                    <dd>{patrimonio?.localizacaoID}</dd>
                  </dl>

                  <dl>
                    <dt>Status Atual</dt>
                    <dd>{patrimonio?.statusPatrimonioID}</dd>
                  </dl>
                </div>
              </article>
            </>
          )}
        </section>

        <section
          className={`${styles.table_section} ${styles.layout_guide}`}
          aria-label="Lista de histórico do patrimônio"
        >
          <h2>Histórico</h2>

          <table className={styles.history_table}>
            <thead>
              <tr>
                <th>Data</th>
                <th>Tipo de movimentação</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Responsável</th>
                <th>Justificativa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-label="Data">11/02/2026</td>
                <td data-label="Tipo de movimentação">
                  <span className={styles.status_badge}>Transferência</span>
                </td>
                <td data-label="Origem">Sala 07/08</td>
                <td data-label="Destino">Sala 09/10</td>
                <td data-label="Responsável">Gustavo Lima</td>
                <td data-label="Justificativa">
                  <a
                    href="#"
                    aria-label="Ver justificativa da transferência"
                    onClick={(e) => {
                      e.preventDefault();
                      setJustifcativaOpen(true);
                    }}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <ModalJustificativa
          isOpen={isJustficativaOpen}
          onClose={() => setJustifcativaOpen(false)}
        />
      </main>
    </>
  );
};

export default DetalhePatrimonio;