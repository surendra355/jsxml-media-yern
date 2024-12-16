import logo from './logo.svg';
import './App.css';
import lbposter from "./images/lbposter.jpg"
import luckyBhaskar1 from "./audios/luckyBhaskar1.mp3"
import luckyBhaskar2 from "./audios/luckyBhaskar2.mp3"
import luckyBhaskar3 from "./audios/luckyBhaskar3.mp3"
import luckyBhaskar4 from "./videos/luckyBhaskar.mp4"
function App() {
  return (
    <div className="App">

  <div>
   
  <div>
  <h1>Ala Vaikuntapuram Lo..</h1>
      <img className='avPoster' src='https://wallpapercave.com/wp/wp5241381.jpg' alt=''></img>
      <div className='avAudio'>
        <audio className='avAudio' src='https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3' controls></audio>
        <audio className='avAudio' src='https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/02 - Ramuloo Ramulaa.mp3' controls></audio>
        <audio className='avAudio' src='https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/03 - OMG Daddy.mp3' controls></audio>
      </div>
     <video className='avTrailer' src='https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4' controls autoPlay muted></video>
     
  </div>
   
  <div>
  <h1>Pushpa 2: The Rule</h1>
  <img className='p2Poster' src='../images/p2img.jpg' alt=''></img>
  <div className='p2Audio'>
  <audio className='p2Audio' src='./audios/pushpa1.mp3' controls></audio>
  <audio className='p2Audio' src='./audios/pushpa2.mp3' controls></audio>
  <audio className='p2Audio' src='./audios/pushpa3.mp3' controls></audio>
  </div>
  <video className='p2Trailer' src='./videos/pushpa.2.mp4' controls autoPlay muted></video>
</div>

      </div>
<div>
<h1>Lucky Baskhar</h1>
  <img className='lbImage' src={lbposter} alt=''></img>          
  <div className='lbAudio'>
  <audio className='lbAudio' src={luckyBhaskar1} controls></audio>
  <audio className='lbAudio' src={luckyBhaskar2} controls></audio>
  <audio className='lbAudio' src={luckyBhaskar3} controls></audio>
  </div>
<video className='lbTrailer' src={luckyBhaskar4} controls autoPlay muted></video>
</div>


 
    </div>
    
  );
}

export default App;
