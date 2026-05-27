import styles from "@/components/modal-transferir/modal-transferir.module.css"


const ModalTransferir = () => {
    return(
        <>
            <section className={styles.modal_overlay}>
            <article className={styles.modal_container} id={styles.modalTransferir}>
                <a href="#" className={styles.modal_close}>
                    x
                </a>

                <h1 className={styles.modal_title}>
                    Transferir os patrimônios
                </h1>

                <form className={styles.modal_form}>
                    <div className={styles.modal_field}>
                        {/* htmlFor e id vinculados através do CSS Module */}
                        <label htmlFor={styles.ambienteTransferencia}>
                            Ambiente
                        </label>

                        <select id={styles.ambienteTransferencia}>
                            <option>Manutenção</option>
                            <option>Sala XX</option>
                            <option>Sala XX</option>
                        </select>
                    </div>

                    <div className={styles.modal_field}>
                        <label htmlFor={styles.motivoTransferencia}>
                            Motivo da transferência
                        </label>

                        {/* No React, a tag textarea vazia pode ser de auto-fechamento */}
                        <textarea 
                            id={styles.motivoTransferencia}
                            placeholder="Lorem"
                        />
                    </div>

                    <button type="button" className={styles.modal_button}>
                        TRANSFERIR
                    </button>
                </form>
            </article>
        </section>
        </>
    )
}
export default ModalTransferir;