import React, {createContext} from "react";

export const ThemeContext = createContext()

class ThemeContextProvider extends React.Component{
    state = {
        isDark : true,
        darkTheme:{
            backgroundColor:'#333333',
            textColor:'#f5f5f5',
            buttonBg:'#00b894',
            ButtonCl:'#fff',
        },
        lightTheme:{
            backgroundColor:'#fff',
            textColor:'#333333',
            buttonBg:'#00b894',
            ButtonCl:'#fff',

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