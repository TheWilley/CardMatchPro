import { Flipped, Flipper } from 'react-flip-toolkit';
import PlayingCard from '../components/Card';
import { getImageUrl } from '../utils/image-utils';
import useSpriteSheet from '../hooks/useSpriteSheet';
import useGame from '../hooks/useGame';
import Score from './Score';

function GameBoard() {
  const getSprite = useSpriteSheet(getImageUrl('cards'), 15, 4, 100, 144);
  const { deck, score, scoreDiff, addClickedCard } = useGame();

  return (
    <>
    <Score score={score} scoreDiff={scoreDiff} />
      <Flipper flipKey={JSON.stringify(deck)} className='mt-2'>
        <div className='grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 w-full p-3'>
          {deck.map((card) => (
            <Flipped flipId={card.id} key={card.id}>
              <div>
                <PlayingCard
                  card={card}
                  frontImage={getSprite(card.image[0], card.image[1]) || ''}
                  backImage={getSprite(3, 14) || ''}
                  onClick={() => {
                    addClickedCard(card);
                  }}
                />
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </>
  );
}

export default GameBoard;
