import React from 'react'

const Header = () => {

    const [items, setItems] = useState([
        { id: 1, text: "ALL", class: 'links links-clicked' },
        { id: 2, text: "ELECTRONICS", class: 'links ' },
        { id: 3, text: "JEWELERY", class: 'links' },
        { id: 4, text: "MEN'S CLOTHING", class: 'links ' },
        { id: 5, text: "WOMEN'S CLOTHING", class: 'links ' }
      ]);
  return (
    <div className='top-div'>
      
    </div>
  )
}

export default Header
