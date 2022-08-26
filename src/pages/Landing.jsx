import logo from '../assets/images/logo.svg';
import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic
            esse. Velit, non sint tempora numquam illum perferendis repellat
            eligendi voluptatibus. Laborum, quibusdam? Harum laborum
            exercitationem autem, a unde ipsum.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
