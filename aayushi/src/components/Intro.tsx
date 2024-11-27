import imgHand from '../assets/hand.gif'

export const Intro = () => {
  return (
    <div className="flex flex-row space-x-3 justify-center p-12 ">
        <img src={imgHand} alt="image" className='h-36 opacity-80'/>
        <div>
            <strong className='text-purple-950'>Hello!</strong>
            <div>I am Enkhmaa.</div>
            <strong className='text-purple-950'>Interaction Designer</strong>
            <div>Inspired By Functional Designs That</div>
            <strong className='text-purple-950'>Highlight Human Experience.</strong>
        </div>

    </div>
  )
}
