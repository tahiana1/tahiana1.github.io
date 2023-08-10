export default function Header(props) {
  return (
    <header className='App-header' id='profile'>
      <section className='App-profile px-1 py-1 animate-banner'>
        <h1>Tahiana Flavien Abia ANDRIAHAJAMALALA</h1>
        <p className='sub-text animate-start'>
          Hey There, I'm a
          Web Developer from <strong className='flag'>Madagascar</strong>
          <br />I love to create web apps that would make life easy, accessible
          and enjoyable for people.
        </p>
        <ul className="animate-start">
          <li>
            <a
              className='github flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='GitHub'
              aria-label='GitHub'
              target='_blank'
              href='https://github.com/tahiana1'
              rel='noopener noreferrer'>
              <span className='fab fa-github'></span>
            </a>
          </li>  
          <li>
            <a
              className='stackoverflow flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Stack Overflow'
              aria-label='Stack Overflow'
              target='_blank'
              href='https://stackoverflow.com/users/22367273/tahiana-flavien-abia-andriahaj'
              rel='noopener noreferrer'>
              <span className='fab fa-stack-overflow'></span>
            </a>
          </li>
          <li>
            <a
              className='outlook flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Email'
              aria-label='Email'
              href='mailto:tahianaflavienabia@gmail.com'>
              <span className='fa-brands fa-internet-explorer'></span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
