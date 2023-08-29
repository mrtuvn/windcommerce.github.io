import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import Main from "../components/commons/Main";

// interface Context {
//   packageJSON: {
//     name ?: string
//   }
// }

// function tryGetPackageName(context: Context) {
//   const packageJSON = context.packageJSON;

// }

// type RGB = [number, number, number]

// const palette  = {
//   red: [255, 0 , 0],
//   green: "#fefef",
//   bluee: [0, 0 , 255]
// } satisfies Record<RGB | 'red' | 'blue' | 'bluee'>

export default function Home() {
  return (
    <>
      <main
        className="main flex h-full flex-col"
        style={{
          backgroundImage: `url('./images/animate-bg2.svg')`,
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}
