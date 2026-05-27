import React from 'react';
import styles from "@/pages/listar-patrimonios/listar-patrimonios.module.css"
import Header from '@/components/header/header';
import Pagination from '@/components/pagination/pagination';
import ModalTransferir from '@/components/modal-transferir/modal-transferir';
import ModalImportar from '@/components/modal-importar/modal-importar';


const ListaPatrimoniosPorSala =  () => {
    return (
        <>
        <Header />
            <main className={styles.page_content}>
                <section className={`${styles.page_header} ${styles.layout_guide}`} aria-labelledby={styles.titulo_patrimonios}>
                    <h1 id={styles.titulo_patrimonios}>Patrimônios: Sala 09/10</h1>

                    <form className={styles.search_area} role="search">
                        {/* A label precisa apontar para o ID do input gerado pelo CSS Module */}
                        <label htmlFor={styles.pesquisa_ambiente} className={styles.sr_only}>
                            Pesquisar patrimônios
                        </label>

                        <input 
                            type="search" 
                            id={styles.pesquisa_ambiente} 
                            name="pesquisaAmbiente" 
                            placeholder="Pesquise o ambiente" 
                        />

                        <button type="button" className={styles.filter_button} aria-label="Filtrar patrimonios">
                            <i className="fa-solid fa-sliders"></i>
                        </button>
                    </form>
                </section>

                <section className={`${styles.table_section} ${styles.layout_guide}`} aria-label="Lista de patrimonios">
                    <table className={styles.environment_table}>
                        <thead>
                            <tr>
                                <th>Patrimônio</th>
                                <th>Denominação</th>
                                <th>Tipo</th>
                                <th>Data transfêrencia</th>
                                <th>Detalhes</th>
                                <th>Transferir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Removido o class="" vazio que estava no <tr> */}
                            <tr>
                                <td>1236808</td>
                                <td>MESA TRAPEZOIDAL DC-1987a</td>
                                <td>Mesa</td>
                                <td>11/02/26</td>
                                <td>
                                    <a href="#" aria-label="Ver detalhes do patrimonio">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" aria-label="Transferir patrimonio">
                                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <Pagination />
                <ModalTransferir />
                <ModalImportar />
            </main>
        </>
    );
};

export default ListaPatrimoniosPorSala;