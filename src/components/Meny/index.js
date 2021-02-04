
import s from './style.module.css';
import cn from 'classnames';


const MENU =[
    {
        title:'HOME',
        to:'#welcome'
    },
    {
        title:'GAME',
        to:'#game'
    },
    {
        title:'ABOUT',
        to:'#about'
    },
    {
        title:'CONTACT',
        to:'#contact'
    }
]


const Meny =({isActiveMenu})=>{
    

    return (
        <>
            <div className={cn(s.menuContainer,{
                [s.active]: isActiveMenu === true,
                [s.deactive]: isActiveMenu === false
            })}>
                <div className={s.overlay} />
                    <div className={s.menuItems}>
                        <ul>
                            {
                                MENU.map(({title, to}, index) =>(
                                    <li key={index}>
                                        <a href={to}>
                                            {title}
                                        </a>
                                    </li>    
                                ))
                            }
                                                            
                        </ul>
                </div>
            </div>
        </>
    )
}
export default Meny;