import propTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    return (
        <button style={{backgroundColor: color}}
        className='btn' onClick={onClick}>{text}</button>
    )
}

Button.defaultPtops = {
    color: 'blue',
}

Button.propTypes = {
    color: propTypes.string,
    text: propTypes.string
}

export default Button