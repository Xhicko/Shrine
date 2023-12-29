import React, {createContext} from "react";

export const ThemeContext = createContext()

class ThemeContextProvider extends React.Component{
    state = {
        isDark : false,
        darkTheme:{
            backgroundColor:'#000',
            textColor:'#fff',
            buttonBg:'#fff',
            ButtonCl:'#000'
        },
        lightTheme:{
            backgroundColor:'#fff',
            textColor:'#000',
            buttonBg:'#000',
            ButtonCl:'#fff'
        }
    }

    changeTheme = () => {
        this.setState({isDark: !this.state.isDark})
    }

    render(){
        return(
                <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                    {this.props.children}
                </ThemeContext.Provider>
        )
    }
}


export default ThemeContextProvider