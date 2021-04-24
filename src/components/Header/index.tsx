import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss'
//React tudo funciona a base de import
export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale:ptBR,

  }); //formata a data de acordo biblioteca date-fns
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podscatr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  )
}