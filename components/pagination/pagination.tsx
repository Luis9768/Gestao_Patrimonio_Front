import styles from "@/components/pagination/pagination.module.css"

const Pagination = () => {
    return<>
    <nav className={styles.pagination} aria-label="Paginação">
                    <button type="button" className={styles.pagination_button} aria-label="Página anterior">
                        ‹
                    </button>

                    <a href="#" className={`${styles.pagination_link} ${styles.current}`} aria-current="page">1</a>
                    <a href="#" className={styles.pagination_link}>2</a>
                    <a href="#" className={styles.pagination_link}>3</a>

                    <button type="button" className={styles.pagination_button} aria-label="Próxima página">
                        ›
                    </button>
                </nav>
    </>
}
export default Pagination;