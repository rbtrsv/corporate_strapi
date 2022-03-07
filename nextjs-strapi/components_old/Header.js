import styled from '@emotion/styled'
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import { rem } from 'polished'

function Header({isDark}) {
    return (
        <HeaderStyled isDark={isDark}>
            <div className='container'>
                <div className='logo'>
                    {/* <img src="/images/IMG_3088.jpeg" alt="Site logo"/> */}
                    <img src="favicon.ico" alt="Site logo" width="50" height="50"/>
                    <span className="logo-text">Next Movies</span>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    /* background: ${props => props.theme.colors.primary}; */
    /* background: #efefef; */
    background: ${props => props.isDark ? '#000000' : '#efefef'};
    padding: 20px;

    .logo {
        display: flex;
        align-items: center;

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left: 20px;
        }
    }

`

export default Header