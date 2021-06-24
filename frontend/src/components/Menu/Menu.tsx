import React from 'react';
import { Link, Route } from 'react-router-dom';

var Menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Giải trí',
        to: '/giaitri',
        exact: false
    },
    {
        name: 'Thể thao',
        to: '/thethao',
        exact: true
    },
    {
        name: 'Kinh doanh',
        to: '/kinhdoanh',
        exact: false
    },
    {
        name: 'Sức khoẻ',
        to: '/suckhoe',
        exact: false
    },
    {
        name: 'Khoa học',
        to: '/khoahoc',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }: { label: string, to: string, activeOnlyWhenExact: boolean }): JSX.Element => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`${active}`}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

const Menu = () => {
    const showMenus = (menus: typeof Menus): JSX.Element[] | null => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                {showMenus(Menus)}
            </ul>
        </nav>
    );




}

export default Menu;