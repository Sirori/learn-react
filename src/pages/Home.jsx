import Logo from "../components/Logo";

function Home() {
  return (
    <div>
      <h2>홈 페이지</h2>

      <Logo />
      <Logo color="blue" size={300} />
      <Logo color="skyblue" size={500} />
      <Logo color="pink" size={700} />
    </div>
  );
}

export default Home;