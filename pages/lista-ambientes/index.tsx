import React, { useEffect, useState } from 'react';
import styles from "@/pages/lista-ambientes/lista-ambientes.module.css"
import Header from '@/components/header/header';
import Pagination from '@/components/pagination/pagination';
import { useRouter } from 'next/router';
import { erro, notificacao } from '@/utils/toast';
import { cadastrarArea, listarArea } from '../api/areaService';
import { UUID } from 'crypto';



interface Area {
    id: UUID,
    nome: string
}




const ListaLocais = () => {

    return (
        <>
            <Header />

            <main className={styles.page_content}>
                <section className={`${styles.page_header} ${styles.layout_guide}`} aria-labelledby={styles.titulo_ambientes}>
                    <h1 id={styles.titulo_ambientes}>Ambientes</h1>

                    <form className={styles.search_area} role="search">
                        {/* A label aponta para o ID gerado pelo CSS Module */}
                        <label htmlFor={styles.pesquisa_ambiente} className={styles.sr_only}>
                            Pesquisar ambiente
                        </label>

                        <input 
                            type="search" 
                            id={styles.pesquisa_ambiente} 
                            name="pesquisaAmbiente" 
                            placeholder="Pesquise o ambiente" 
                        />

                        <button type="button" className={styles.filter_button} aria-label="Filtrar ambientes">
                            <i className="fa-solid fa-sliders"></i>
                        </button>
                    </form>
                </section>

                <section className={`${styles.table_section} ${styles.layout_guide}`} aria-label="Lista de ambientes">
                    <table className={styles.environment_table}>
                        <thead>
                            <tr>
                                <th>Local</th>
                                <th>Responsável</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Removido o class="" vazio */}
                            <tr>
                                <td>Sala 30/31 (anfiteatro)</td>
                                <td>Samanta Melissa</td>
                                <td>
                                    <a href="#" aria-label="Ver detalhes da Sala 30/31">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <Pagination />
            </main>
        </>
    );
};


export default ListaLocais;