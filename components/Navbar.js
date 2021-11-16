import styled from 'styled-components'

const NavbarComponent = styled.div`
height:5em;
padding-left:1em;
background: #eee;
box-shadow: 0 8px 8px -4px lightblue;
display:flex;
justify-content:center;
algin-items:center;
`;
export default function Navbar() {

    return (
        <>
            <NavbarComponent>
                <h1>FreeTube</h1>
            </NavbarComponent>
        </>
    )
}