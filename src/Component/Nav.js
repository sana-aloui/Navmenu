import React from 'react'

export default function Nav({arr}) {
    return (
        <ul className="menu-main">
{
arr.map(el=><li><a>{el.menu}</a> {el.submenu && <ul className="sub-menu">{el.submenu.map(x=><li><a>{x}</a></li>)}</ul>}</li>)
}
    </ul>   

    )
}


        
