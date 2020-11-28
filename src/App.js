//import Painting from './components/Painting'
import paintingsData from './painting.json';

import PaintingList from './components/PaintingList';
import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Panel from './components/Panel';

// export default function App(){
//     return(
//         <div>
//             <Painting
//                 // imageUrl={paintingsData[0].url} // а в компоненте задал значение по умолчанию
//                 title={paintingsData[0].title}
//                 authorUrl={paintingsData[0].author.url}
//                 //authorTag={paintingsData[0].author.tag} // а в компоненте задал значение по умолчанию
//                 price={paintingsData[0].price}
//                 quantity={paintingsData[0].quantity}
//             />
//             <Painting
//                 imageUrl={paintingsData[1].url}
//                 title={paintingsData[1].title}
//                 authorUrl={paintingsData[1].author.url}
//                 authorTag={paintingsData[1].author.tag}
//                 price={paintingsData[1].price}
//                 quantity={paintingsData[1].quantity}
//             />
//             <Painting
//                 imageUrl={paintingsData[2].url}
//                 title={paintingsData[2].title}
//                 authorUrl={paintingsData[2].author.url}
//                 authorTag={paintingsData[2].author.tag}
//                 price={paintingsData[2].price}
//                 quantity={paintingsData[2].quantity}
//             />
//         </div>
//     )
// }
//---------------------------------------------------------------------------
// Рендер по условию
// для рендера по условию есть логическое И (&&) и тернарный (?:)

// export default function App(){
//     const isOnline = true
//     let res
//     return(
//         <div>
//             {isOnline && 'Online'}
//             {isOnline ? 'Online' : 'Offline'}
//         </div>
//     )
// }

//---------------------------------------------------------------------------
// Рендер Коллекций
// export default function App(){
//     return(
//         <div>
//             {[1,2,3,4,5].map(el => <div>{el}</div>)}
//         </div>
//     )
// }
// При рендере однотипных елементов нужен key для каждого (на самом верхнем уровне, теге)

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel title="Last News">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempore sint veritatis facere soluta fugiat expedita at nostrum quod
          esse dolores, nisi quis architecto eveniet dolore. Maiores illum fugit
          eius?
        </p>
      </Panel>
      {/* <PaintingList paintingList={paintingsData} /> */}
      <Section title="ТОП недели!">
        <PaintingList paintingList={paintingsData} />{' '}
        {/* это children у Section */}
      </Section>
      <Section />
    </div>
  );
}
