import './Logo.scss';
import logoc from '../../../images/CherryTreeGlyph.png';

export default function Logo() {
    return (
        <div className='logo-container'>
                <img className='solid-logo' src={logoc} alt='Cherry'/>
        </div>
    )
}

