import React, {Component} from "react";
import '../../scss/Code.scss';
import Typist from 'react-typist';
import $ from 'jquery';


class Code extends Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseDown =this.handleMouseDown.bind(this);
        this.handleLoad = this.handleLoad.bind(this);

        this.state = {
            isHovering: false,
            typeSpeed:30,
            stdTypeDelay:25,
        };
    }

    handleMouseEnter() {
        this.setState(this.toggleHoverStateTrue());
    }

    handleMouseLeave() {
        this.setState(this.toggleHoverStateFalse());
    }

    toggleHoverStateTrue() {
        return {
            isHovering: true,
        };
    }

    toggleHoverStateFalse() {
        return {
            isHovering: false,
        };
    }

    skipTyping(){
        return{
            typeSpeed: -20,
        }
    }
    togglestdTypeDelay(){
        return{
            stdTypeDelay: -20,
        }
    }
    handleMouseDown(){
        this.setState(this.skipTyping());
        this.setState(this.togglestdTypeDelay())
    }
    changeGenerator(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        // Delay the animation for 2 seconds at the last character of the first line
        if (std===0) {
            return 0;
        }
        return defDelayGenerator();
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        document.body.style = 'background: #d9d9d9;';

    }


    render() {
        return (
            <div className={'code megatron'} onClick={this.handleMouseDown}>
                <Typist avgTypingDelay={this.state.typeSpeed} stdTypingDelay={this.state.stdTypeDelay} delayGenerator={this.changeGenerator}  onClick={this.handleMouseDown} className={'typist'}>
                    <div className={'scope0 invisible'} onClick={this.handleMouseDown} >{String.fromCharCode(2000)}</div>
                    <div className={'scope0'} onClick={this.handleMouseDown}><p>{'public class MinhVuNguyen { '}</p></div>
                    <div className={'scope1'} onClick={this.handleMouseDown}>{'boolean loop=true;'}</div>
                    <div className={'scope0 invisible'} onClick={this.handleMouseDown}>{String.fromCharCode(2000)}</div>
                    <div className={'scope1'} onClick={this.handleMouseDown}>{'public static void main (String []args) {'}</div>
                    <div className={'scope2'} onClick={this.handleMouseDown}>{' while(loop){'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{'String answer = ask.where.to();'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{['if (answer==\'', <a href={'about'}><span onMouseEnter={this.handleMouseEnter}
                                                                        onMouseLeave={this.handleMouseLeave}
                                                                        className="bold">About Me</span></a>, '\'){']}</div>
                    <div className={'scope4'} onClick={this.handleMouseDown}>{'go.to(\'About.html\');'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{['else if (answer==\'', <span onMouseEnter={this.handleMouseEnter}
                                                                             onMouseLeave={this.handleMouseLeave}
                                                                             className="bold">My Projects</span>, '\'){']}</div>
                    <div className={'scope4'} onClick={this.handleMouseDown}>{'go.to("Projects.html");'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{['else if (answer==\'', <span onMouseEnter={this.handleMouseEnter}
                                                                             onMouseLeave={this.handleMouseLeave}
                                                                             className="bold">Contact Me</span>, '\'){']}</div>
                    <div className={'scope4'} onClick={this.handleMouseDown}>{'go.to(\'Contact.html\');'}</div>
                    <div className={'scope3'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope2'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope1'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope0'} onClick={this.handleMouseDown}>{'}'}</div>
                    <div className={'scope0 invisible'} onClick={this.handleMouseDown}>{String.fromCharCode(2000)}</div>

                </Typist>
                <div>
                    {this.state.isHovering && <div className={'coverUp'}></div>}
                </div>


            </div>
        );
    }

}

export default Code;
