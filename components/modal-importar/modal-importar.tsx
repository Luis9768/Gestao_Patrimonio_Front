import styles from "@/components/modal-importar/modal-importar.module.css"
import ModalJustificativa from "../modal-justificativa/modal-justificativa";


const ModalImportar = () => {
    return(
        <>
        <section className={styles.modal_overlay}>
            <article className={styles.modal_container} id={styles.modalImportar}>
                <a href="#" className={styles.modal_close}>
                    x
                </a>

                <h1 className={styles.modal_title}>
                    Importar novos patrimônios
                </h1>

                <form className={styles.modal_form}>
                    <div className={styles.modal_field}>
                        <label htmlFor={styles.numeroPatrimonio}>
                            Número do patrimônio
                        </label>

                        <input 
                            type="text" 
                            id={styles.numeroPatrimonio}
                            placeholder="1245769"
                        />
                    </div>

                    <div className={styles.modal_field}>
                        <label htmlFor={styles.denominacaoPatrimonio}>
                            Denominação
                        </label>

                        <input 
                            type="text"
                            id={styles.denominacaoPatrimonio}
                            placeholder="CADEIRA GIRATÓRIA EM POLIPROPILENO PRETO"
                        />
                    </div>

                    <button type="button" className={styles.modal_button}>
                        SALVAR IMPORTAÇÃO
                    </button>
                </form>
            </article>
        </section>
        </>
    )
}
export default ModalImportar;