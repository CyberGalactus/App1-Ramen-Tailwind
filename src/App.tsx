import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import ShoyuramenImage from './assets/shoyuramen.png';
import TokutsuramenImage from './assets/tokutsuramen.png';
import MisoramenImage from './assets/misoramen.png';
import ShioramenImage from './assets/shioramen.png';
import { ReactNode, useEffect, useState } from 'react';

function App() {
  const [shoyuVote, setShoyuVote] = useState<number>(0)
  const [tokutsuVote, setTonkotsuVote] = useState<number>(0)
  const [shioVote, setShioVote] = useState<number>(0)
  const [misoVote, setMisoVote] = useState<number>(0)

  const [winner, setWinner] = useState<string | null>(null)
 
  const handleClick = (soppa: string): void => {
     if (soppa == "Shoyu Ramen") {
      setShoyuVote(shoyuVote + 1);
     } else if (soppa === "Tokutsu Ramen") {
      setTonkotsuVote(tokutsuVote +1);
     } else if (soppa === "Shio Ramen") {
      setShioVote(shioVote +1);
     }  else if (soppa === "Miso Ramen") {
      setMisoVote(misoVote +1 );
     }  
  }

      useEffect(() => {
      calculateWinner();
  }, [shoyuVote, tokutsuVote, shioVote, misoVote])

  //   const calculateWinner = (): void => {
  //   shoyuVote > tokutsuVote
  //     ? setWinner("Shoyu Ramen")
  //     : tokutsuVote > shioVote
  //       ? setWinner('Tokutsu Ramen')
  //       : misoVote > shioVote
  //       ? setWinner("Miso Ramen")
  //       : shioVote > misoVote
  //         ? setWinner("Shio Ramen")
  //         : setWinner(null)
  // }

    const calculateWinner = (): void => {
    const voteCounts: Record<string, number> = {
      'Shoyu Ramen': shoyuVote,
      'Tokutsu Ramen': tokutsuVote,
      'Shio Ramen': shioVote,
      'Miso Ramen': misoVote,
    };

    const maxVotes = Math.max(...Object.values(voteCounts));
// if maxvotes = 0 do not show this
    console.log("Max votes: " + maxVotes)
    const winners = Object.keys(voteCounts).filter(key => voteCounts[key] === maxVotes);

    if (winners.length === 1) {
      setWinner(`${winners[0]} has ${maxVotes} votes`);
    } else {
      setWinner(`it's a tie between ${winners.join( " and " )} with ${maxVotes}`); // It's a tie
    }
  }

  // if maxvotes = 0 setwinner to be a message like "please vote"

  const displayWinner = (winner:string | null):ReactNode => {
    if (winner) {
      return (
        <div className="text-center text-2xl mb-4 bg-RamenBrown">
          <span className={`text-${winner} font-DancingScript text-4xl block mt-6 bg-RamenBrown`}>{winner}</span>
        </div>
      );
    } 
    return <div className="text-center text-2xl mb-4">it's a tie!</div> // It's a tie
  };

  return (
      <div className=''>
        <Header title="RAMEN" subtitle="vilken ramen är bäst??"/>
        {displayWinner(winner) }
        <div className="md:flex bg-RamenBrown">
          <Section 
            title="Shoyu Ramen"
            subtitle="Shoyu ramen features a clear, brown broth with a chicken or vegetable stock base and soy sauce"
            onclick={() => handleClick("Shoyu Ramen")}
            className="bg-RamenShop"
          >
            <img className="w-full" src={ShoyuramenImage} alt="Shoyu Ramen" />
          </Section>

          <Section
            title="Tonkotsu Ramen"
            subtitle="Tonkotsu ramen originated in Kurume, Fukuoka Prefecture, located on the northern shore of Kyushu island in Japan"
            onclick={() => handleClick("Tokutsu Ramen")}
            className="bg-RamenShop"
          >
            <img className="w-full" src={TokutsuramenImage} alt="Tokotsu Ramen" />
          </Section>

          <Section
            title="Miso Ramen"
            subtitle="Miso ramen gets its name from the generous amount of miso that gives the broth a strong, pleasantly sharp umami flavor."
            onclick={() => handleClick("Miso Ramen")}
            className="bg-RamenShop"
          >
            <img className="w-full" src={MisoramenImage} alt="Miso Ramen" />
          </Section>

          <Section
            title="Shio Ramen"
            subtitle="Shio is the oldest of the four flavors and means “salt,” as sea salt was the oldest form of seasoning, dating back to the original Chinese-style noodle soups in the 1800s."
            onclick={() => handleClick("Shio Ramen")}
            className="bg-RamenShop"
          >
            <img className="w-full" src={ShioramenImage} alt="Shio Ramen" />
          </Section>  
        </div>
        <Footer />
      </div>
  );
}

export default App;