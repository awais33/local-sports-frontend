import Image from "../../components/atoms/Image";
import MainLayout from "../../components/templates/MainLayout";
// import { HomeProps } from "./@types";

const Home = () => {
  return (
        <MainLayout 
        Children={<Image src="/match-logo.png" />}
         />
  );
};

export default Home;