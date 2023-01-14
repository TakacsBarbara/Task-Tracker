import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddForm, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAddForm} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Default Heading',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
