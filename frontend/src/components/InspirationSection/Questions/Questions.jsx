import { assets } from '../../../assets/assets'
import './Questions.css'

const Questions = () => {
  return (
    <div className='questions_container'>
        <img src={assets.lady} alt="" className='question_bg_image' />
        <div className='questions_content'>
            <h1>Questions <br/> about <br /> hosting?</h1>
            <button>Ask a Superhost</button>
        </div>
    </div>
  )
}

export default Questions