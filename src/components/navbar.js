import React from "react";
import $ from 'jquery';
import Logo from '../images/Logo.svg';
import 'glyphicons';
class Navbar extends React.Component {
    componentDidMount() {
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            return false;
        });
    }y
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0070c0" }}>
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="" width="75px">
                    </img>
                    <b>You be Incessant!</b>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link white" href="/">Enterprise <span className="sr-only">(current)</span></a>
                        </li> */}

                       <li className="nav-item dropdown active">
                       <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle submenu-dropdown" href="/">Web UI Courses <b class="right-caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/AngularComp">Angular</a></li>
                                        <li><a className="dropdown-item" href="/ReactComp">React</a></li>
                                        <li><a className="dropdown-item" href="/JScomp">HTML + CSS + Javascript</a></li>
                                    </ul>
                                    <a className="dropdown-item dropdown-toggle submenu-dropdown" href="/">Job Oriented Courses <b class="right-caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/JavaFSComp">Java Full Stack Development</a></li>
                                        <li><a className="dropdown-item" href="/DotNetFSComp">.Net Full Stack Development</a></li>
                                        <li><a className="dropdown-item" href="/PHPFSComp">PHP Full Stack Development</a></li>
                                    </ul>
                                    <a className="dropdown-item dropdown-toggle submenu-dropdown" href="/">Advanced Courses <b class="right-caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/Python">Python</a></li>
                                        <li><a className="dropdown-item" href="/AIML">AI & ML</a></li>
                                    </ul>
                                </li>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link white" href="/Certification">Certifications <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link white" href="/Enterprise">Enterprise <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link white" href="/AboutUs">About Us <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li><a href="/register" className="btn btn-info" role="button">Register</a></li>&nbsp;
                    </ul>
                </div>

            </nav>
        );
    }
}
export default Navbar;